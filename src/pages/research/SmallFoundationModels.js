import { useState } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
import PublicationHero from "../../components/PublicationHero";
import TextBlocks from "../../components/TextBlocks";
import CentauriCover from "../../assets/covers/centauri_cover.jpg";
import ScalingFigure from "../../assets/diagrams/centauri_scaling.png";
import AblationFigure from "../../assets/diagrams/centauri_ablation.png";
import PermutationFigure from "../../assets/diagrams/centauri_permutation.png";
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
// Code snippets (Run one) — highlighted with a tiny fixed-purpose tokenizer
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
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading: (
        <>
          <CustomHeadingLink
            href="https://www.nature.com/articles/s41586-025-09215-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centaur
          </CustomHeadingLink>{" "}
          showed that a 70-billion-parameter language model fine-tuned on
          Psych-101 — 10.7 million choices from 60,092 participants — predicts
          human behaviour better than the domain-specific cognitive models
          psychologists build by hand. We asked what that result actually
          rests on — and answered with fourteen open models, from 135M to 14B
          parameters, fine-tuned to predict what real people do in
          psychological experiments, trial by trial.
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            Across four base-model families, whether a model has been
            fine-tuned on behaviour matters far more than how large it is. Our
            0.6B <CustomCode>Qwentaur</CustomCode> already edges the original
            Centaur-70B (0.69 vs 0.71 mean negative log-likelihood over the 46
            held-out-participant tasks) and matches the cognitive-model
            baseline (0.69).
            <br></br>
            <br></br>
            Accuracy on familiar paradigms is cheap. What remains expensive —
            and unsolved — is breadth: the models saturate within the paradigms
            they have seen and remain far from saturated outside them. Full
            results in the{" "}
            <CustomLink href={ARXIV} target="_blank" rel="noopener noreferrer">
              paper
            </CustomLink>
            ; every{" "}
            <CustomLink
              href={COLLECTION}
              target="_blank"
              rel="noopener noreferrer"
            >
              adapter
            </CustomLink>{" "}
            and{" "}
            <CustomLink href={GITHUB} target="_blank" rel="noopener noreferrer">
              training script
            </CustomLink>{" "}
            is public.
          </Body>
        </>
      ),
      id: 2,
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
      id: 3,
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
      />
      <PublicationHero publicationHeroes={publicationHeroes} />

      <CustomTextContainer>
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 1)} />

        {/* ------------------- thesis ------------------- */}
        <PullQuote>
          Seventy billion parameters are not what cognitive foundation models
          rest on.
        </PullQuote>
        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 2)} />

        {/* ------------------- headline figure ------------------- */}
        <FigureCard>
          <MyImage
            alt="Mean negative log-likelihood against parameter count for all fourteen fine-tuned models across LoRA ranks 4 to 64, with per-rank side panels. Fine-tuned curves cluster far below the dotted cognitive-model baseline from roughly 1B parameters upward, and the Centaur-70B diamonds sit within the range already reached by 4-14B models."
            src={ScalingFigure}
          />
        </FigureCard>
        <Caption>
          <b>Adapter rank against model size on Psych-101.</b> Mean negative
          log-likelihood over the 38 of 46 held-out-participant tasks with a
          published domain-specific cognitive model (dotted line), one side
          panel per adapter rank (r&thinsp;=&thinsp;4–64). Lower is better.
        </Caption>

        {/* ------------------- stat band ------------------- */}
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

        {/* ------------------- model chooser ------------------- */}
        <SectionHead>Which model should you use?</SectionHead>
        <SectionSub>
          Every model is released as a LoRA adapter on a public base. These six
          cover the sensible operating points; the{" "}
          <CustomLink href={COLLECTION} target="_blank" rel="noopener noreferrer">
            collection
          </CustomLink>{" "}
          holds the full rank and data-fraction grid behind the paper&rsquo;s
          ablations.
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
                  Ties the flagship at half the size — and shares
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
                  end to end — weights, data, and training recipe.
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
                  The floor of the sweep — yet still ahead of the untuned,
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
          Lower is better. Each model link opens that size&rsquo;s full adapter
          collection. Per-task tables, the out-of-distribution
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

        {/* ------------------- run one ------------------- */}
        <SectionHead>Run one</SectionHead>
        <SectionSub>
          Every adapter loads with stock <CustomCode>transformers</CustomCode>
          &thinsp;+&thinsp;<CustomCode>peft</CustomCode> — or with{" "}
          <CustomCode>unsloth</CustomCode>, the loader our training and
          evaluations use. The base checkpoint resolves automatically from the
          adapter config. These are completion models over experiment
          transcripts, not chat assistants: give them a session in the
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

        {/* ------------------- stress tests ------------------- */}
        <SectionHead>Right for the right reasons?</SectionHead>
        <SectionSub>
          Accuracy alone would settle nothing; an instrument must also respond
          to the right things. Two stress tests probe what the models actually
          read from an experiment&rsquo;s transcript — and whether the original
          70B behaves any differently.
        </SectionSub>
        <StressRow>
          <FigureCard style={{ maxWidth: "560px" }}>
            <MyImage
              alt="Information retention across four prompt-ablation conditions for nine models including Centaur-70B. Retention stays near 0.8 when instructions are removed, then collapses below zero when stimulus content is masked or only choice history remains; the Centaur-70B curve is indistinguishable from the small models."
              src={AblationFigure}
            />
          </FigureCard>
          <StressCaption>
            <b>Masking content collapses prediction.</b> Share of learned
            information retained as prompt components are removed, over the 27
            ablation experiments with a defined chance floor
            (mean&thinsp;&plusmn;&thinsp;SEM). Dropping instructions costs
            little; masking the content of stimuli and feedback — or leaving
            only the bare choice history — erases essentially everything, for
            every model. Centaur-70B (diamonds) is indistinguishable from
            models a hundredth its size.
          </StressCaption>
        </StressRow>
        <StressRow $flip>
          <StressCaption>
            <b>Order matters only where it should.</b> Variance of each
            participant&rsquo;s predictions across 50 shufflings of
            context-trial order. On THINGS odd-one-out (top), where trials are
            exchangeable, fine-tuned models are near-invariant — 8.4&times;
            lower variance than their bases. On intertemporal choice (bottom),
            an adaptive staircase whose ordering encodes the
            participant&rsquo;s discount rate, the same models turn strongly
            order-sensitive — exactly where order genuinely carries
            information.
          </StressCaption>
          <FigureCard>
            <MyImage
              alt="Box plots and cumulative distributions of per-participant order variance for fine-tuned and base models on two tasks. On THINGS odd-one-out, fine-tuned models show far lower variance than base models; on intertemporal choice the pattern reverses."
              src={PermutationFigure}
            />
          </FigureCard>
        </StressRow>

        {/* ------------------- limitations ------------------- */}
        <SectionHead>What these models are — and aren&rsquo;t</SectionHead>
        <LimitGrid>
          <Limit>
            <LimitHead>Instruments, not theories</LimitHead>
            <Body>
              They estimate how predictable behaviour is within paradigms they
              have seen — a noise ceiling for experimental data. Whether
              fine-tuning moves these models any distance toward human
              mechanism is a question for representational analysis, and we
              treat it as open.
            </Body>
          </Limit>
          <Limit>
            <LimitHead>Bound by coverage, not capacity</LimitHead>
            <Body>
              Training spans 160 laboratory paradigms. Models saturate within
              the paradigms they have seen and remain far from saturated
              outside them: the binding constraint is breadth of paradigms,
              not parameters and not more participants per experiment.
            </Body>
          </Limit>
          <Limit>
            <LimitHead>Content is what they read</LimitHead>
            <Body>
              Prediction collapses when the content of stimuli and feedback is
              masked, and responds to trial order only where the experimental
              design makes order informative — a useful sanity check against
              shortcut explanations of what the models learned.
            </Body>
          </Limit>
          <Limit>
            <LimitHead>Low-rank, dense, supervised</LimitHead>
            <Body>
              Adaptation is LoRA throughout (r&thinsp;=&thinsp;4–64), on dense
              decoder-only transformers, trained with supervised fine-tuning
              on one epoch. Full fine-tuning at small scales, other
              architectures, and RL-based post-training could all move the
              picture — none are tested here.
            </Body>
          </Limit>
        </LimitGrid>

        {/* ------------------- artifacts ------------------- */}
        <SectionHead>Artifacts</SectionHead>
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

        <TextBlocks textBlocks={textBlocks.filter((b) => b.id === 3)} />
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

export const PullQuote = styled(H3)`
  max-width: 26ch;
  margin-top: 24px;
`;

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

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  border-top: 1px solid ${LINE};
  padding-top: 32px;
  margin-top: 24px;

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

export const StressRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$flip ? "minmax(220px, 3fr) minmax(0, 9fr)" : "minmax(0, 560px) minmax(240px, 1fr)"};
  gap: 24px 44px;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 14px;

    /* figure first when stacked */
    ${(props) => props.$flip && "& > :first-child { order: 2; } & > :last-child { order: 1; }"}
  }
`;

export const StressCaption = styled(Caption)`
  margin-top: 0;
  font-size: 15px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const LimitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 48px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Limit = styled.div``;

export const LimitHead = styled.h3`
  font-family: "GeneralSans";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: ${INK};
  margin-bottom: 10px;
`;

