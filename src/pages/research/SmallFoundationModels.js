import { useState } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
import PublicationHero from "../../components/PublicationHero";
import TextBlocks from "../../components/TextBlocks";
import CentauriCover from "../../assets/covers/centauri_cover.jpg";
import Github from "../../assets/images/github-mark.svg";
import HuggingFace from "../../assets/images/hf-logo.svg";
import ScalingFigure from "../../assets/diagrams/centauri_scaling.png";
import AblationFigure from "../../assets/diagrams/centauri_ablation.png";
import PermutationFigure from "../../assets/diagrams/centauri_permutation.png";
import OodFigure from "../../assets/diagrams/centauri_ood.png";
import {
  Body,
  CustomLink,
  CustomHeadingLink,
  CustomTextContainer,
  CustomCode,
  ImageContainer,
  MyImage,
  H3,
  PrimaryButton,
  SecondaryButton,
  TagContainer,
} from "../../styles";

// ---------------------------------------------------------------------------
// Links
// ---------------------------------------------------------------------------

const ARXIV = "https://arxiv.org/abs/2608.05224";
const GITHUB = "https://github.com/socius-org/Centauri";
const COLLECTION = "https://hf.co/collections/socius/centauri";
const HF_PAPER = "https://huggingface.co/papers/2608.05224";

// ---------------------------------------------------------------------------
// Code snippets (Take one home) — highlighted with a tiny fixed-purpose
// tokenizer
// ---------------------------------------------------------------------------

const PROMPT_LINES = `# Psych-101 transcripts: task instructions, then one line per trial with
# the participant's choice between << >> markers. Stop the prompt before a
# choice and the model predicts what this participant presses next.
prompt = (
    "In this task, you have to repeatedly choose between two slot machines "
    "labeled O and G. You can choose a slot machine by pressing its "
    "corresponding key. When you select one of the machines, you will win "
    "or lose points. Machine O will not always give you the same points "
    "when you select it again, but machine G will always give 0 points "
    "when you select it. Your goal is to choose the slot machines that "
    "will give you the most points. You will receive feedback about the "
    "outcome after making a choice. You will play 20 games in total, each "
    "with a different pair of slot machines. Each game will consist of 10 "
    "trials.\\n\\n"
    "Game 1:\\n"
    "You press <<O>> and get -1 points.\\n"
    "You press <<G>> and get 0 points.\\n"
    "You press <<"
)

inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
with torch.no_grad():
    probs = model(**inputs).logits[0, -1].softmax(-1)
for key in "OG":
    token = tokenizer.encode(key, add_special_tokens=False)[0]
    print(f"P({key}) = {probs[token]:.2f}")`;

const SNIPPET_TF = `# pip install torch transformers peft
import torch
from peft import AutoPeftModelForCausalLM
from transformers import AutoTokenizer

model_id = "socius/Qwentaur-8B-LoRA-r16"   # any adapter from the table
model = AutoPeftModelForCausalLM.from_pretrained(
    model_id, torch_dtype=torch.bfloat16, device_map="auto")
tokenizer = AutoTokenizer.from_pretrained(model_id)

${PROMPT_LINES}`;

const SNIPPET_UNSLOTH = `# pip install unsloth
import torch
from unsloth import FastLanguageModel

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="socius/Qwentaur-8B-LoRA-r16",   # any adapter from the table
    max_seq_length=32768,
    dtype=None,
    load_in_4bit=False,
)

${PROMPT_LINES}`;

// One regex pass over a known, fixed snippet: comments, strings (incl. f""),
// Python keywords, numeric/boolean constants. Everything else renders plain.
const TOKEN_RE =
  /(#[^\n]*)|(f?"(?:[^"\\]|\\.)*")|\b(import|from|with|for|in)\b|\b(-?\d+|False|None|True)\b/g;

const highlight = (code) => {
  const nodes = [];
  let last = 0;
  let m;
  let i = 0;
  while ((m = TOKEN_RE.exec(code)) !== null) {
    if (m.index > last) nodes.push(code.slice(last, m.index));
    const [, comment, string, keyword, number] = m;
    if (comment !== undefined) nodes.push(<CodeC key={i}>{comment}</CodeC>);
    else if (string !== undefined) nodes.push(<CodeS key={i}>{string}</CodeS>);
    else if (keyword !== undefined) nodes.push(<CodeK key={i}>{keyword}</CodeK>);
    else nodes.push(<CodeN key={i}>{number}</CodeN>);
    last = m.index + m[0].length;
    i += 1;
  }
  if (last < code.length) nodes.push(code.slice(last));
  return nodes;
};

const BIBTEX = `@inproceedings{oh2026smallcogfm,
  title     = {Small Foundation Models of Human Cognition and Behaviour},
  author    = {Oh, Nick and Gobet, Fernand},
  booktitle = {Third Conference on Language Modeling (COLM)},
  year      = {2026},
  note      = {arXiv:2608.05224}
}`;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const SmallFoundationModels = () => {
  const [pane, setPane] = useState("tf");
  const [copied, setCopied] = useState(null);

  const copy = (which, text) => {
    navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 1600);
  };

  const [publicationHeroes] = useState([
    {
      tagOne: "Conference",
      tagTwo: "COLM 2026",
      heading: "Small Foundation Models of\nHuman Cognition and Behaviour",
      image: CentauriCover,
      imageAlt:
        "Classical landscape painting of Mount Pelion, Greece: a ruined temple and two horses on a hillside above the Aegean. In myth, Pelion was the home of the centaur Chiron.",
      id: 1,
    },
  ]);

  const [textBlocks] = useState([
    {
      paperLink: ARXIV,
      github: Github,
      gitLink: GITHUB,
      hf: HuggingFace,
      hfLink: COLLECTION,
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading: (
        <>
          How many parameters does it take to predict a human? In 2025,{" "}
          <CustomHeadingLink
            href="https://www.nature.com/articles/s41586-025-09215-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nature's answer appeared to be 70 billion
          </CustomHeadingLink>
          : Centaur, a large language model fine-tuned on ten million choices
          from real
          psychological experiments, beat the models psychologists build by
          hand. Nobody had tested smaller. So we trained fourteen open models
          across four families, from 135 million to 14 billion parameters, to
          find out.
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Obvious Lesson Was Scale",
      paragraph: (
        <>
          <Body>
            Foundation models trained a reflex into all of us: when a large
            model does something surprising, credit the size. Centaur fit the
            reflex perfectly. One model, one base family, one enormous
            scale. But a single model at a single size is a confounded
            experiment. It can't tell you whether the result rests on the 70
            billion parameters or on{" "}
            <CustomLink
              href="https://huggingface.co/datasets/marcelbinz/Psych-101"
              target="_blank"
              rel="noopener noreferrer"
            >
              Psych-101
            </CustomLink>
            , the dataset of 10.7 million choices from 60,092 participants it
            was fine-tuned on.
            <br></br>
            <br></br>
            If predicting human behaviour is an ability that emerges
            somewhere on the road to 70 billion parameters, then cognitive
            foundation models belong to the few labs that can serve them. If
            it's a skill that any competent language model picks up once you
            show it enough human choices, then every psychology department
            with a consumer GPU can train one, probe one, and break one.
            <br></br>
            <br></br>
            The only way to tell the two apart is to run the same experiment
            at many different sizes.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "So We Bred Smaller Centaurs",
      paragraph: (
        <>
          <Body>
            We took four open base families (Llama, Qwen, OLMo, SmolLM)
            spanning fourteen models from 135 million to 14 billion
            parameters, and gave every one of them exactly Centaur's
            education: the same ten million choices, transcribed trial by
            trial across 160 psychological experiments, with the same recipe.
            The herd got names. Llama-Centaur, Qwentaur, Olmotaur, Smoltaur.
            <br></br>
            <br></br>
            Then we varied what the original left fixed, from the adapter
            rank (how much fine-tuning is allowed to change the base model)
            to the share of the training data each model saw.
          </Body>
        </>
      ),
      id: 3,
    },
    {
      justify: "flex-end",
      subheading: "What Mattered Was the Data",
      paragraph: (
        <>
          <Body>
            Once a model has been fine-tuned on behaviour, size stops being
            the story. By 0.6 billion parameters,{" "}
            <CustomCode>Qwentaur</CustomCode> matches the cognitive-model
            baseline psychologists spent decades hand-building (0.69 mean
            negative log-likelihood over 46 tasks) and edges past our
            reproduction of Centaur-70B (0.71). The best models in the grid,
            Qwentaur-14B and Llama-Centaur-8B at 0.64, beat the original
            outright at a fifth and a ninth of its size.
            <br></br>
            <br></br>
            Adapter rank tells the same story from another angle. The more we
            let fine-tuning change the base model, the smaller the model that
            keeps up: matching Centaur-70B takes an 8B model at rank 4, a 3B
            at rank 8, a 1.7B at rank 16, and just 0.6B at rank 32 and above.
            <br></br>
            <br></br>
            Whether a model has been fine-tuned on behaviour matters
            enormously; how large it is barely matters at all. Seventy
            billion parameters were never the foundation. Ten million human
            choices were.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "What Are They Actually Reading?",
      paragraph: (
        <>
          <Body>
            An easy objection remains: perhaps these models are right for
            the wrong reasons, picking up on some superficial regularity in
            the transcripts rather than reading the experiments themselves.
            An instrument must respond to the right things. So we ran two
            stress tests on what the models actually take from a session.
          </Body>
        </>
      ),
      id: 5,
    },
    {
      justify: "flex-end",
      subheading: "Solved Inside, Unsolved Outside",
      paragraph: (
        <>
          <Body>
            So, the honest ledger. These models are instruments, not
            theories. They estimate how predictable human behaviour is
            within the experiments they have seen; nothing in our results
            says fine-tuning moved any of them closer to human mechanism.
            <br></br>
            <br></br>
            They are also bounded by coverage, not capacity. Inside
            Psych-101's 160 paradigms the models are saturated: more
            parameters, higher rank, even more participants per experiment
            buy almost nothing. Outside them, on the eighteen held-out
            experiments of Psych-201, every model falls far short of its
            familiar-task numbers. Our best model there (Qwentaur-14B, at
            0.79) still edges the 70B (0.82), but nobody is near saturation.
            Accuracy on familiar paradigms turned out to be cheap. Breadth is
            what remains expensive, and it is bought with new experiments,
            not new parameters.
            <br></br>
            <br></br>
            And the sweep has edges we haven't crossed: adaptation is LoRA
            throughout, on dense decoder-only transformers, with one epoch of
            supervised fine-tuning. Full fine-tuning at small scale, other
            architectures, and reinforcement-learning post-training could all
            move this picture; none are tested here.
            <br></br>
            <br></br>
            But the constraint that binds is hard to mistake. If the field
            wants a foundation model of cognition, the bottleneck isn't
            parameters. It's paradigms: the breadth of human experiments
            anyone has transcribed.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <span style={{ fontStyle: "italic" }}>
              Built on the{" "}
              <CustomLink
                href="https://www.nature.com/articles/s41586-025-09215-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centaur
              </CustomLink>{" "}
              methodology and the{" "}
              <CustomLink
                href="https://huggingface.co/datasets/marcelbinz/Psych-101"
                target="_blank"
                rel="noopener noreferrer"
              >
                Psych-101
              </CustomLink>{" "}
              dataset (Binz et al.).
              <br></br>
              <br></br>
              Built small, on purpose, at socius: Experimental Intelligence
              Lab.
            </span>
          </Body>
        </>
      ),
      id: 7,
    },
  ]);

  return (
    <>
      <Seo
        title="Small Foundation Models of Human Cognition and Behaviour | socius labs"
        description="Centauri: fourteen open models, 135M–14B, fine-tuned to predict human behaviour trial by trial. Whether a model is fine-tuned on behaviour matters far more than how large it is. COLM 2026."
        image={CentauriCover}
        path="/research/small-foundation-models-of-human-cognition"
        type="article"
        datePublished="2026-08-05"
        authors={["Nick Oh", "Fernand Gobet"]}
        sameAs={[ARXIV, "https://hf.co/papers/2608.05224"]}
      />
      <PublicationHero publicationHeroes={publicationHeroes} />

      {/* ═══════════ essay: narrow text columns + full-width figures ═══════ */}
      <CustomTextContainer>
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 1)} />
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 2)} />
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 3)} />
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 4)} />

        <FigureCard>
          <MyImage
            alt="Mean negative log-likelihood against parameter count for all fourteen fine-tuned models across LoRA ranks 4 to 64, with per-rank side panels. Fine-tuned curves cluster far below the dotted cognitive-model baseline from roughly 1B parameters upward, and the Centaur-70B diamonds sit within the range already reached by 4-14B models."
            src={ScalingFigure}
          />
        </FigureCard>
        <Caption>
          <b>Small models predict people about as well as the giant.</b>{" "}
          Every point is one of our fine-tuned models, scored on how well it
          predicts the choices of participants it never saw during training
          (lower is better). The dotted line is the benchmark set by the
          cognitive models psychologists build by hand; the diamonds on the
          right are the original 70-billion-parameter Centaur. The smaller
          panels repeat the comparison at each adapter rank, from 4 to 64.
        </Caption>

        {/* ------------------- the sweep in numbers ------------------- */}
        <StatGrid>
          <Stat>
            <StatN>14</StatN>
            <StatL>open models</StatL>
          </Stat>
          <Stat>
            <StatN>4</StatN>
            <StatL>base-model families</StatL>
          </Stat>
          <Stat>
            <StatN>135M–14B</StatN>
            <StatL>parameter range</StatL>
          </Stat>
          <Stat>
            <StatN>10.7M</StatN>
            <StatL>human choices trained on</StatL>
          </Stat>
          <Stat>
            <StatN>117</StatN>
            <StatL>LoRA adapters (r&thinsp;=&thinsp;4, 8, 16, 32, 64)</StatL>
          </Stat>
        </StatGrid>

        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 5)} />

        <StressRow>
          <StressCaption>
            <b>Take away the content and predictions collapse.</b> We deleted
            parts of the experiment transcripts and measured how much of each
            model&rsquo;s predictive power survived (1 means all of it, 0
            means no better than guessing; averaged over 27 experiments).
            Removing the task instructions costs little. Masking what
            participants actually saw and the feedback they received, or
            leaving only their bare sequence of key presses, erases
            essentially everything. The models are reading the experiment,
            not memorising response patterns.
          </StressCaption>
          <FigureCard>
            <MyImage
              alt="Information retention across four prompt-ablation conditions for eight fine-tuned models. Retention stays high when task instructions are removed, then collapses to around or below zero when stimulus content is masked or only the choice history remains."
              src={AblationFigure}
            />
          </FigureCard>
        </StressRow>

        <StressRow>
          <StressCaption>
            <b>Order matters only where it should.</b> We shuffled the order
            of the past trials shown to each model 50 times and measured how
            much its predictions wobbled. Top: a task where people simply
            pick which of three objects doesn&rsquo;t belong. The order of
            past trials carries no information there, and the fine-tuned
            models barely react to shuffling, while their untuned bases react
            far more. Bottom: a task where people choose between a smaller
            reward now and a larger one later, with each question adapting to
            the answers before it. There, order genuinely matters, and the
            same models become sharply order-sensitive.
          </StressCaption>
          <FigureCard>
            <MyImage
              alt="Box plots and cumulative distributions of per-participant order variance for fine-tuned and base models on two tasks. On the odd-one-out task, fine-tuned models show far lower variance than base models; on the delayed-reward task the pattern reverses."
              src={PermutationFigure}
            />
          </FigureCard>
        </StressRow>

        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 6)} />

        <FigureCard>
          <MyImage
            alt="Two-panel scaling figure at LoRA rank 16. Left: Psych-101 mean negative log-likelihood versus parameter count, with fine-tuned families forming nearly flat lines far below the dotted cognitive baseline and untuned base models scattered high above. Right: the same models on Psych-201's held-out experiments; every value sits much higher, the fitted slopes are steeper, and the Qwentaur-14B point lands just below the reproduced Centaur-70B diamond."
            src={OodFigure}
          />
        </FigureCard>
        <Caption>
          <b>Familiar tasks are nearly solved. New ones aren&rsquo;t.</b>{" "}
          Both panels score models on predicting people&rsquo;s choices
          (lower is better). Left: new participants doing tasks the models
          saw during training. The lines are nearly flat, so extra size buys
          almost nothing. Right: eighteen kinds of experiments the models
          never saw during training. Everyone starts much further back here,
          and the lines fall steeply: on unfamiliar experiments, extra size
          still buys real gains, and no model is close to done improving.
        </Caption>

        {/* ═══════════ resource appendix: one practical section ═══════════ */}
        <SectionHead>Run One Yourself</SectionHead>
        <SectionSub>
          The stable is public: every{" "}
          <CustomLink href={COLLECTION} target="_blank" rel="noopener noreferrer">
            adapter
          </CustomLink>{" "}
          and{" "}
          <CustomLink href={GITHUB} target="_blank" rel="noopener noreferrer">
            training script
          </CustomLink>
          , down to the last rank and data fraction. Each model ships as a
          LoRA adapter on an open base; these six cover the sensible
          operating points, and each link opens that size&rsquo;s full
          adapter collection.
        </SectionSub>
        <TableWrap>
          <Chooser>
            <thead>
              <tr>
                <th>Model</th>
                <th>Base</th>
                <th>Params</th>
                <th>Mean NLL &darr;</th>
                <th>Pick it when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TdModel>
                  <Dot $colour="#8d7fd0" />
                  <a
                    href="https://hf.co/collections/socius/qwentaur-14b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Qwentaur-14B
                  </a>
                </TdModel>
                <td>Qwen3</td>
                <TdNum>14B</TdNum>
                <TdNum $best>0.64</TdNum>
                <TdWhy>
                  Accuracy is all that matters. Best in-distribution, and the
                  strongest transfer to unseen experiments.
                </TdWhy>
              </tr>
              <tr>
                <TdModel>
                  <Dot $colour="#2f7fd3" />
                  <a
                    href="https://hf.co/collections/socius/llama-centaur-8b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Llama-Centaur-8B
                  </a>
                </TdModel>
                <td>Llama-3.1</td>
                <TdNum>8B</TdNum>
                <TdNum $best>0.64</TdNum>
                <TdWhy>
                  Ties the flagship at half the size, and shares
                  Centaur&rsquo;s own base family for direct comparisons.
                </TdWhy>
              </tr>
              <tr>
                <TdModel>
                  <Dot $colour="#e85d9f" />
                  <a
                    href="https://hf.co/collections/socius/olmotaur-7b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Olmotaur-7B
                  </a>
                </TdModel>
                <td>OLMo-3</td>
                <TdNum>7B</TdNum>
                <TdNum>0.68</TdNum>
                <TdWhy>
                  Provenance matters as much as prediction: the base is open
                  end to end (weights, data, and training recipe).
                </TdWhy>
              </tr>
              <tr>
                <TdModel>
                  <Dot $colour="#8d7fd0" />
                  <a
                    href="https://hf.co/collections/socius/qwentaur-4b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Qwentaur-4B
                  </a>
                </TdModel>
                <td>Qwen3</td>
                <TdNum>4B</TdNum>
                <TdNum>0.66</TdNum>
                <TdWhy>
                  A single consumer GPU is the budget. Near-flagship accuracy
                  in a laptop-class footprint.
                </TdWhy>
              </tr>
              <tr>
                <TdModel>
                  <Dot $colour="#8d7fd0" />
                  <a
                    href="https://hf.co/collections/socius/qwentaur-06b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Qwentaur-0.6B
                  </a>
                </TdModel>
                <td>Qwen3</td>
                <TdNum>0.6B</TdNum>
                <TdNum>0.69</TdNum>
                <TdWhy>
                  Matches the cognitive-model baseline and edges reproduced
                  Centaur-70B at about 1% of the parameters.
                </TdWhy>
              </tr>
              <tr>
                <TdModel>
                  <Dot $colour="#e3b93a" />
                  <a
                    href="https://hf.co/collections/socius/smoltaur-01b-lora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Smoltaur-0.1B
                  </a>
                </TdModel>
                <td>SmolLM2</td>
                <TdNum>135M</TdNum>
                <TdNum>0.89</TdNum>
                <TdWhy>
                  The floor of the sweep, yet still ahead of the untuned,
                  60&times;-larger Llama-3.1-8B (0.92).
                </TdWhy>
              </tr>
              <RefRow>
                <TdModel style={{ fontWeight: 400 }}>
                  Centaur-70B (reproduced)
                </TdModel>
                <td>Llama-3.1</td>
                <TdNum>70B</TdNum>
                <TdNum>0.71</TdNum>
                <TdWhy>
                  Reference: the original model, re-evaluated under our library
                  and CUDA versions.
                </TdWhy>
              </RefRow>
              <RefRow>
                <TdModel style={{ fontWeight: 400 }}>Cognitive models</TdModel>
                <td>&mdash;</td>
                <TdNum>&mdash;</TdNum>
                <TdNum>0.69</TdNum>
                <TdWhy>
                  Reference: the best published domain-specific cognitive model
                  per task. Chance sits at 0.98.
                </TdWhy>
              </RefRow>
            </tbody>
          </Chooser>
        </TableWrap>
        <TableNote>
          Mean negative log-likelihood across all 46 held-out-participant
          Psych-101 tasks; bf16 inference, LoRA rank 16, full training data.
          Lower is better. Per-task tables, the out-of-distribution
          Psych-201 results, and 4-bit numbers are in the{" "}
          <a href={ARXIV} target="_blank" rel="noopener noreferrer">
            paper appendix
          </a>{" "}
          and the{" "}
          <a
            href={`${GITHUB}/tree/main/results`}
            target="_blank"
            rel="noopener noreferrer"
          >
            results directory
          </a>
          .
        </TableNote>
        <SectionSub>
          Every adapter loads with stock <CustomCode>transformers</CustomCode>
          &thinsp;+&thinsp;<CustomCode>peft</CustomCode>, or with{" "}
          <CustomCode>unsloth</CustomCode>, the loader our training and
          evaluations use. The base checkpoint resolves automatically from the
          adapter config. Remember these are completion models over experiment
          transcripts, not chat assistants: hand one a session in the
          Psych-101 format and read off the distribution over what this
          participant does next.
        </SectionSub>
        <Seg role="tablist" aria-label="Loader">
          <SegBtn
            type="button"
            role="tab"
            aria-selected={pane === "tf"}
            $active={pane === "tf"}
            onClick={() => setPane("tf")}
          >
            <span aria-hidden="true">🤗</span> transformers
          </SegBtn>
          <SegBtn
            type="button"
            role="tab"
            aria-selected={pane === "us"}
            $active={pane === "us"}
            onClick={() => setPane("us")}
          >
            <span aria-hidden="true">🦥</span> unsloth
          </SegBtn>
        </Seg>
        <CodeCard>
          <Pre>{highlight(pane === "tf" ? SNIPPET_TF : SNIPPET_UNSLOTH)}</Pre>
          <CopyBtn
            type="button"
            onClick={() =>
              copy("run", pane === "tf" ? SNIPPET_TF : SNIPPET_UNSLOTH)
            }
          >
            {copied === "run" ? "Copied" : "Copy"}
          </CopyBtn>
        </CodeCard>
        <TagContainer style={{ gap: "24px", flexWrap: "wrap" }}>
          <PrimaryButton href={ARXIV} target="_blank">
            Read the paper
          </PrimaryButton>
          <SecondaryButton href={GITHUB} target="_blank">
            Code on GitHub
          </SecondaryButton>
          <SecondaryButton href={COLLECTION} target="_blank">
            Adapters on Hugging Face
          </SecondaryButton>
          <SecondaryButton href={HF_PAPER} target="_blank">
            HF paper page
          </SecondaryButton>
        </TagContainer>
        <CodeCard>
          <Pre>{BIBTEX}</Pre>
          <CopyBtn type="button" onClick={() => copy("bib", BIBTEX)}>
            {copied === "bib" ? "Copied" : "Copy"}
          </CopyBtn>
        </CodeCard>

        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 7)} />
      </CustomTextContainer>
    </>
  );
};

export default SmallFoundationModels;

// ---------------------------------------------------------------------------
// Page-local styling (socius tokens throughout)
// ---------------------------------------------------------------------------

const INK = "#1c1c1e";
const MIST = "#f1f0ef";
const LINE = "#e6e4e2";
const FOG = "#b9b4b0";

export const FigureCard = styled(ImageContainer)`
  border: 1px solid ${LINE};
  border-radius: 20px;
  padding: clamp(12px, 3vw, 32px);
  background: white;
`;

export const Caption = styled.p`
  font-family: "GeneralSans";
  font-size: 14px;
  color: ${FOG};
  line-height: 1.5;
  max-width: 90ch;
  margin-top: -8px;

  b {
    color: ${INK};
    font-weight: 500;
  }
`;

export const StressRow = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 5fr) minmax(0, 8fr);
  gap: 24px 44px;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 14px;

    /* figure first when stacked */
    & > :first-child {
      order: 2;
    }
    & > :last-child {
      order: 1;
    }
  }
`;

export const StressCaption = styled(Caption)`
  margin-top: 0;
  font-size: 15px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  border-top: 1px solid ${LINE};
  border-bottom: 1px solid ${LINE};
  padding: 32px 0;
  margin: 80px 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Stat = styled.div``;

export const StatN = styled.div`
  font-family: "Montagu Slab", serif;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.1;
  color: ${INK};
  font-variant-numeric: tabular-nums;
`;

export const StatL = styled.div`
  font-family: "GeneralSans";
  font-weight: 500;
  font-size: 14px;
  color: ${FOG};
  margin-top: 6px;
`;

export const SectionHead = styled(H3)`
  margin-top: 48px;
`;

export const SectionSub = styled(Body)`
  max-width: 62ch;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  border: 1px solid ${LINE};
  border-radius: 20px;
`;

export const Chooser = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 760px;
  font-family: "GeneralSans";

  th {
    text-align: left;
    font-size: 13px;
    font-weight: 500;
    color: ${FOG};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 18px 20px 12px;
    border-bottom: 1px solid ${LINE};
  }

  td {
    padding: 18px 20px;
    border-bottom: 1px solid ${LINE};
    font-size: 16px;
    vertical-align: top;
    line-height: 1.4;
    color: ${INK};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const TdModel = styled.td`
  white-space: nowrap;
  font-weight: 500;

  a {
    color: ${INK};
    text-decoration: none;
    border-bottom: 1px solid ${FOG};
    padding-bottom: 1px;
  }

  a:hover {
    color: ${FOG};
  }
`;

export const Dot = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: 1px;
  background: ${(props) => props.$colour};
`;

export const TdNum = styled.td`
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  font-weight: 500;
  ${(props) => props.$best && "text-decoration: underline; text-underline-offset: 3px;"}
`;

export const TdWhy = styled.td`
  max-width: 46ch;
`;

export const RefRow = styled.tr`
  td {
    color: ${FOG};
    font-size: 15px;
    background: #fafaf9;
  }
`;

export const TableNote = styled.p`
  font-family: "GeneralSans";
  font-size: 14px;
  color: ${FOG};
  line-height: 1.5;
  max-width: 90ch;
  margin-top: -8px;

  a {
    color: ${FOG};
  }
  a:hover {
    color: ${INK};
  }
`;

export const Seg = styled.div`
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  background: ${MIST};
  border-radius: 40px;
  align-self: flex-start;
`;

export const SegBtn = styled.button`
  font-family: "GeneralSans";
  font-weight: 500;
  font-size: 13px;
  padding: 7px 16px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background: ${(props) => (props.$active ? INK : "transparent")};
  color: ${(props) => (props.$active ? "white" : INK)};

  &:hover:not([aria-selected="true"]) {
    opacity: 0.55;
  }
`;

export const CodeCard = styled.div`
  position: relative;
  margin-top: -12px;
`;

export const Pre = styled.pre`
  background: ${MIST};
  border-radius: 20px;
  padding: 24px;
  font-family: ui-monospace, "Cascadia Mono", Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.55;
  overflow-x: auto;
  color: ${INK};
`;

export const CodeC = styled.span`
  color: #8f8983;
  font-style: italic;
`;
export const CodeK = styled.span`
  color: #6355a8;
`;
export const CodeS = styled.span`
  color: #23619f;
`;
export const CodeN = styled.span`
  color: #b0406f;
`;

export const CopyBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: "GeneralSans";
  font-weight: 500;
  font-size: 13px;
  padding: 8px 14px;
  border: none;
  border-radius: 40px;
  background: white;
  color: ${INK};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.45;
  }
`;
