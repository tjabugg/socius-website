"""Generator for src/assets/diagrams/limits_double_descent.png.

The double-descent illustration on the research page "Reliability,
Faithfulness, and the Limits of Post-hoc Explanations of Opaque Scientific
Models". A socius-styled adaptation of Fig. 2 of Dubova et al. (2025), PNAS
122(5) e2401230121 (CC BY 4.0), after Nakkiran et al. (2021), J. Stat. Mech.
124003.

Left panel: prediction error against polynomial degree for one noisy sample
drawn from a cubic trend plus a finer sine wiggle (one draw, unsmoothed, so
the curve describes the very fits shown beside it). Right panels: the fits
of degree 1, 3, 20, and 1,000 to that sample. The wiggle is what a cubic
cannot express, which is why the degree-1,000 model ends up ahead of the
cubic on new data.

Usage:
    python scripts/limits_double_descent_figure.py [--font-dir DIR]

Typography uses Rethink Sans (OFL, available on Google Fonts and Fontshare).
Point --font-dir at a directory of its .ttf files; without it the figure
renders in matplotlib's default sans and will not match the committed asset
pixel for pixel. Requires numpy, matplotlib, and (for the downscaled web
asset) Pillow.
"""

import argparse
import os

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import font_manager
from matplotlib.gridspec import GridSpec
from numpy.polynomial import chebyshev

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "assets", "diagrams",
                   "limits_double_descent.png")

INK = "#1c1c1e"
FOG = "#b9b4b0"
FIT_GREEN = "#51DA4C"    # primary socius green — fitted models
CURVE_BLUE = "#3C46FF"   # primary socius blue — the error curve

parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
parser.add_argument("--font-dir", default=None,
                    help="Directory of Rethink Sans .ttf/.otf files")
args = parser.parse_args()

if args.font_dir and os.path.isdir(args.font_dir):
    for f in sorted(os.listdir(args.font_dir)):
        if f.lower().endswith((".ttf", ".otf")):
            font_manager.fontManager.addfont(os.path.join(args.font_dir, f))
    family = ["Rethink Sans"]
else:
    print("note: no --font-dir given; rendering in the default sans face")
    family = ["DejaVu Sans"]

plt.rcParams.update({
    "font.family": "sans-serif",
    "font.sans-serif": family,
    "axes.unicode_minus": False,
    "axes.edgecolor": INK,
    "axes.linewidth": 0.8,
    "xtick.color": INK,
    "ytick.color": INK,
    "axes.labelcolor": INK,
    "text.color": INK,
})

# ── data from a cubic trend plus finer structure a cubic cannot express, so
#    the very large model can genuinely out-predict the small one ────────────
rng = np.random.default_rng(7)
XMIN, XMAX = -2.5, 2.5
NOISE = 0.65
true_f = lambda x: x**3 - 4.0 * x + 2.0 * np.sin(3.0 * x)

n = 24
x = np.sort(rng.uniform(XMIN + 0.1, XMAX - 0.1, n))
y = true_f(x) + rng.normal(0, NOISE, n)
xd = np.linspace(XMIN, XMAX, 1200)

# Chebyshev features scaled by k^(-decay). Scaling never changes an
# overdetermined least-squares fit, and in the underdetermined regime it
# makes the minimum-norm solution prefer low frequencies — the smooth
# interpolant of the double-descent literature.
DECAY = 1.5


def design(xs, degree, decay=DECAY):
    z = (2 * xs - (XMIN + XMAX)) / (XMAX - XMIN)
    A = chebyshev.chebvander(z, degree)
    if decay:
        A = A * np.arange(1, degree + 2, dtype=float) ** (-decay)
    return A


def panel_fit(degree, xs, decay):
    """The panel estimator: plain least squares (minimum-norm when
    overparameterised), untouched by the sweep's solver cutoff, so the
    fits keep their original character."""
    A = design(x, degree, decay)
    coef, *_ = np.linalg.lstsq(A, y, rcond=None)
    return design(xs, degree, decay) @ coef


# ── figure: the error sweep on the left, 2x2 fit panels on the right ───────
fig = plt.figure(figsize=(13.6, 6.4))
gs = GridSpec(2, 3, figure=fig, width_ratios=[1.75, 1.0, 1.0],
              hspace=0.42, wspace=0.16)

panel_degrees = [1, 3, 20, 1000]
panel_titles = ["Degree 1", "Degree 3", "Degree 20", "Degree 1,000"]
panel_cells = [(0, 1), (0, 2), (1, 1), (1, 2)]
panel_decay = [0.0, 0.0, 0.0, 1.5]

first_ax = None
for (row, col), deg, title, dec in zip(panel_cells, panel_degrees,
                                       panel_titles, panel_decay):
    ax = fig.add_subplot(gs[row, col], sharey=first_ax)
    if first_ax is None:
        first_ax = ax
    ax.plot(xd, panel_fit(deg, xd, dec), color=FIT_GREEN, lw=2.0, zorder=3)
    ax.scatter(x, y, s=20, facecolor=FOG, edgecolor="white",
               linewidth=0.8, zorder=4)
    ax.set_title(title, fontsize=12, fontweight="bold", pad=6)
    ax.set_xlim(XMIN, XMAX)
    ax.set_ylim(-9, 9)
    ax.set_xticks([-2, 0, 2])
    ax.set_yticks([-8, -4, 0, 4, 8])
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.tick_params(labelsize=9.5)
    if col > 1:
        plt.setp(ax.get_yticklabels(), visible=False)
    if row == 0:
        plt.setp(ax.get_xticklabels(), visible=False)

# Error across the size sweep for the very sample shown in the panels: one
# draw, no averaging, no smoothing. The small rcond keeps the near-singular
# systems at the memorisation threshold finite so the curve stays on-axis.
degrees = sorted(set(
    list(range(1, 30)) +
    [32, 36, 40, 48, 60, 80, 110, 150, 220, 320, 470, 680, 1000]))
err = []
for d in degrees:
    A_train = design(x, d)
    A_dense = design(xd, d)
    coef, *_ = np.linalg.lstsq(A_train, y, rcond=1e-6)
    err.append(float(np.mean((A_dense @ coef - true_f(xd)) ** 2)))

print("err(3) =", err[degrees.index(3)], " err(1000) =",
      err[degrees.index(1000)])

axc = fig.add_subplot(gs[:, 0])
YMAX = max(err) * 2.5
axc.plot(degrees, err, color=CURVE_BLUE, lw=2.0, zorder=3)
axc.set_ylim(0.05, YMAX)
mark_err = [err[degrees.index(d)] for d in panel_degrees]
axc.plot(panel_degrees, mark_err, "o", markersize=7,
         markerfacecolor=FIT_GREEN, markeredgecolor="white",
         markeredgewidth=1.0, zorder=4)
axc.set_xscale("log")
axc.set_yscale("log")
axc.set_xticks(panel_degrees)
axc.set_xticklabels(["1", "3", "20", "1,000"])
axc.minorticks_off()
axc.set_xlabel("Polynomial degree", fontsize=11)
axc.set_ylabel("Error on new data", fontsize=11)
axc.set_title("Prediction error across model sizes", fontsize=13,
              fontweight="bold", pad=8)
axc.spines["top"].set_visible(False)
axc.spines["right"].set_visible(False)
axc.tick_params(labelsize=10)

handles = [
    plt.Line2D([], [], marker="o", linestyle="none", markersize=6,
               markerfacecolor=FOG, markeredgecolor="white",
               markeredgewidth=0.9),
    plt.Line2D([], [], color=FIT_GREEN, lw=2.0),
    plt.Line2D([], [], color=CURVE_BLUE, lw=2.0),
]
labels = ["Data", "Fitted model", "Error on new data"]
fig.legend(handles, labels, loc="lower center", bbox_to_anchor=(0.5, -0.06),
           ncol=3, fontsize=11, frameon=False, handlelength=1.6,
           handletextpad=0.5, columnspacing=1.8)

fig.savefig(OUT, dpi=300, bbox_inches="tight", facecolor="white")
print("saved", OUT)

# Downscale to the 2400px-wide web asset in place.
try:
    from PIL import Image
    im = Image.open(OUT)
    im.thumbnail((2400, 10000), Image.LANCZOS)
    im.save(OUT, optimize=True)
    print("downscaled to", im.size)
except ImportError:
    print("note: Pillow not installed; committed asset is normally 2400px wide")
