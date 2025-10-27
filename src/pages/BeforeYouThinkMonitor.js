import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import PublicationHero from "../components/PublicationHero";
import { Helmet } from "react-helmet";
import VictorianTown from "../assets/images/victorian_town.jpg";
import Tudors from "../assets/images/tudors.jpg";
import Lake from "../assets/images/lake.jpg";
import SentiWordNet from "../assets/images/sentiWordNet_graphic.jpg";
import BeforeYouThinkCover from "../assets/covers/before_you_think_cover.png";
import GSM8KDiagram from "../assets/diagrams/Before_You_Think_The_GSM8K_Experiment.png";
import {
  Body,
  CustomLink,
  CustomTextContainer,
  CustomContainer,
  H5,
  List,
  MyImage,
  ImageContainer,
  CustomHeadingLink,
} from "../styles";
import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";

const BeforeYouThinkMonitor = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Workshop",
      tagTwo: "NeurIPS 2024",
      heading: "Before You <think>, Monitor",
      image: BeforeYouThinkCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      paperLink: "https://openreview.net/pdf?id=xgAGJzRzTE",
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading: (
        <>
          <H5>
            There's a{" "}
            <CustomHeadingLink
              href="https://arxiv.org/abs/2505.07787"
              target="_blank"
              rel="noopener noreferrer"
            >
              20% performance penalty when AI systems start solving problems the
              wrong way
            </CustomHeadingLink>{" "}
            — and once they're on the wrong track, they rarely recover. The
            solution seems obvious: think before you act. After months
            developing a mathematical theory of metacognition, we couldn't
            resist testing it. One weekend, one H100 GPU, and way too much
            caffeine later, this is what happened when we took our metacognition
            theory off the page and into the code.
          </H5>
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Obvious Next Step",
      paragraph: (
        <>
          <Body>
            We'd spent months turning Flavell's and Nelson & Narens'
            psychological insights into mathematical specifications. The{" "}
            <CustomLink
              href="/Monitor-Generate-Verify"
              target=""
              rel="noopener noreferrer"
            >
              MGV framework{" "}
            </CustomLink>{" "}
            looked beautiful on paper — Monitor, Generate, Verify, all neatly
            specified in LaTeX. But there's a special kind of anxiety that comes
            with staring at your own theoretical work. Do the equations actually
            mean anything? The natural question wasn't whether to implement it,
            but how quickly we could try.
            <br></br>
            <br></br>
            The plan was simple. Take{" "}
            <CustomLink
              href="https://doi.org/10.1016/S0079-7421(08)60053-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flavell's cognitive monitoring model
            </CustomLink>{" "}
            and see if we could actually make it work. No fancy architectures.
            No million-dollar compute budgets. Just us, a single H100 GPU, and
            the kind of nervous excitement that defines experimental research.
            <br></br>
            <br></br>
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "From Psychology to Python",
      paragraph: (
        <>
          <Body>
            Weekend. One H100. A theory from 1979. What could go wrong?
            <br></br>
            <br></br>
            Flavell said metacognition needs three ingredients: know yourself,
            know the task, know your tools. Humans build this over years. We had
            48 hours and too much caffeine.
            <br></br>
            <br></br>
            So we cheated. We borrowed a pre-compiled strategy catalog from{" "}
            <CustomLink
              href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/2318d75a06437eaa257737a5cf3ab83c-Abstract-Conference.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Didolkar et al. (2024)
            </CustomLink>
            , which included 20 problem-solving approaches already mapped to
            GSM8K-style problems. It's like giving someone a chess opening book
            instead of letting them discover the patterns themselves. Not ideal,
            but good enough for a proof of concept.
            <br></br>
            <br></br>
            Our implementation ended up with three distinct phases, each
            requiring explicit prompt engineering:
            <List>
              <li>
                <span style={{ fontWeight: "bold" }}>MONITOR:</span> The model
                examines the problem without attempting solution. Pure pattern
                recognition, assigning difficulty scores and identifying
                mathematical concepts.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>GENERATE:</span> WSelects
                appropriate strategy and generates solutions with adaptive
                compute budget. Calm problems get baseline resources. Difficult
                problems get more computational power (Silicon Valley's solution
                to everything).
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>VERIFY:</span> Evaluates
                the solution along Flavell's four cognitive dimensions
                (coherence, plausibility, consistency, goal-conduciveness). Each
                dimension a different flavor of self-doubt. Failing grade
                triggers another attempt with a different strategy.
              </li>
            </List>
          </Body>
        </>
      ),
      id: 3,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            Zero fine-tuning. Zero architecture changes. Just prompt
            orchestration held together with string formatting and temperature
            adjustments. But it captured something essential from Flavell's
            theory: the rhythm of cognitive monitoring, where assessment
            precedes action and evaluation guides revision.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "The GSM8K Experiment",
      paragraph: (
        <>
          <Body>
            We tested on 659 problems from{" "}
            <CustomLink
              href="https://arxiv.org/abs/2110.14168"
              target="_blank"
              // rel="noopener noreferrer"
            >
              GSM8K
            </CustomLink>{" "}
            grade school math problems, because if you're going to fail, fail on
            something well-benchmarked.
          </Body>
        </>
      ),
      id: 5,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            The 7-point accuracy bump is nice, but the interesting bit is how we
            got there. Think of Self-Refinement like a student who rushes
            through a problem, checks their work, and tries again if wrong —
            averaging 2 attempts. MGV is more like the student who reads
            carefully, plans their approach, then solves — needing only 1.3
            attempts. Yes, MGV spends more time thinking upfront, but it saves
            time by getting it right the first time.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      subheading: "Let's Think Slow and Prosper",
      paragraph: (
        <>
          <Body>
            Did we just get lucky on GSM8K? Maybe. Our implementation was
            admittedly crude — borrowed strategies, explicit prompting, one
            benchmark, one weekend. This wasn't rigorous science. It was a proof
            of concept held together with caffeine.
            <br></br>
            <br></br>
            But the results point to something the field may have been missing
            in its rush to engineer solutions.
            <br></br>
            <br></br>
            Current approaches split into two camps. Generate-Verify systems
            (like{" "}
            <CustomLink
              href="https://arxiv.org/abs/2303.17651"
              target="_blank"
              // rel="noopener noreferrer"
            >
              SELF-REFINE
            </CustomLink>
            )draft solutions then edit them — elegant, but once you start wrong,
            you rarely recover. Luo et al. quantified this: bad starts cause 20%
            performance penalties that persist through refinement.
            Monitor-Generate approaches (like
            <CustomLink
              href="https://arxiv.org/abs/2305.04091"
              target="_blank"
              // rel="noopener noreferrer"
            >
              Plan-and-Solve
            </CustomLink>
            ) think before acting — smarter, but they can't tell if their
            strategies actually worked.
            <br></br>
            <br></br>
            Everyone discovered pieces of the puzzle. Pre-thinking helps.
            Verification matters. But implementations felt like engineering
            hunches. How should models structure their monitoring? What makes
            good verification? The field was rediscovering cognitive principles
            through trial and error.
            <br></br>
            <br></br>
            We had working hacks but no theory.
            <br></br>
            <br></br>
            So we tried something different. Instead of being *inspired* by
            human reasoning, we *implemented* it. Flavell's 1979 framework
            doesn't just say “monitor before acting” — it specifies what to
            monitor (difficulty, strategies, confidence), when (before, during,
            after), and how monitoring affects generation. We translated those
            specifications directly into prompts.
            <br></br>
            <br></br>
            What really excites us is the next step. Imagine what happens when
            models learn their own strategies through experience. When they
            don't need to be told to check their confidence — they just feel it
            in their weights. When uncertainty isn't a prompted question but an
            emergent property. When machines genuinely know what they don't
            know.
            <br></br>
            <br></br>
            48 hours. 45-year-old theory. 7-point improvement. Sometimes the
            past is the future.
          </Body>
        </>
      ),
      id: 7,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <span style={{ fontStyle: "italic" }}>
              "Before You {"<think>"}, Monitor" demonstrates what happens when
              theoretical frameworks meet weekend engineering. Read the
              <CustomLink
                href="https://openreview.net/pdf?id=xgAGJzRzTE"
                target="_blank"
                // rel="noopener noreferrer"
              >
                full paper{" "}
              </CustomLink>{" "}
              for implementation details that actually work.
              <br></br>
              <br></br>
              Built with caffeine and curiosity at socius: Experimental
              Intelligence Lab.
            </span>
          </Body>
        </>
      ),
      id: 8,
    },
    {
      justify: "space-between",
      subheading: "sentibank",
      paragraph: "Sixty years of emotion dictionaries. One import statement.",
      paragraphButton: "View all",

      id: 9,
    },
  ]);
  const [articleCards] = useState([
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: VictorianTown,
      padding: "0px",
      heading: "OpinionLexicon",
      paragraph:
        "A dictionary for product reviews, comprising words curated for informal language",
      tagOneBgColour: "#00002E",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Product Review",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 3,
      link: "https://socius-org.github.io/sentibank/archive/OpinionLexicon.html",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: Tudors,
      padding: "0px",
      heading: "VADER",
      paragraph:
        "A gold-standard lexicon optimised for social media sentiment analysis",
      tagOneBgColour: "#1C9418",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Social Media",
      tagTwoBgColour: "#8FB2FF",
      tagTwoColour: "#292726",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 4,
      link: "https://socius-org.github.io/sentibank/archive/VADER.html",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Lake,
      padding: "0px",
      heading: "WordNet-Affect",
      paragraph:
        "Affective labels that are hierarchically organised based on WordNet synsets",
      tagOneBgColour: "#191F8C",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Psychology",
      tagTwoBgColour: "#AEF2AC",
      tagTwoColour: "#514E4B",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 5,
      link: "https://socius-org.github.io/sentibank/archive/WordNet-Affect.html",
    },
    {
      aspectRatio: "1/1",
      flexDirection: "column",
      image: SentiWordNet,
      padding: "0px",
      heading: "SentiWordNet",
      paragraph:
        "A comprehensive dictionary that assigns graded sentiment scores to WordNet synsets",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "General",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 6,
      link: "https://socius-org.github.io/sentibank/archive/SentiWordNet.html",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>When Psychology Theory Meets Llama-3.1 | socius labs"</title>
        <meta
          name="title"
          content="When Psychology Theory Meets Llama-3.1 | socius labs"
        />
        <meta
          name="description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="When Psychology Theory Meets Llama-3.1 | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={BeforeYouThinkCover} />
      </Helmet>
      <PublicationHero publicationHeroes={publicationHeroes} />
      <CustomTextContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />{" "}
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
        />
        <DiagramContainer>
          <MyImage
            // style={{ alignSelf: "flex-end" }}
            alt={`Diagram for the GSM8K Experiment`}
            src={GSM8KDiagram}
          ></MyImage>
        </DiagramContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 6)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 7)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 8)}
        />
      </CustomTextContainer>

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 9)}
        />
        <ArticleCard
          articleCards={articleCards.filter((card) =>
            [3, 4, 5, 6].includes(card.id)
          )}
          grid="1fr 1fr 1fr 1fr"
        />
      </CustomContainer>
    </>
  );
};

export default BeforeYouThinkMonitor;

export const DiagramContainer = styled(ImageContainer)`
  display: flex;
  /* justify-content: flex-end; */
  width: 40%;
  border-radius: 0px;
  margin-left: auto;

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
