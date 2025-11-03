import { useState } from "react";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import { Helmet } from "react-helmet";
import VictorianTown from "../../assets/images/victorian_town.jpg";
import Tudors from "../../assets/images/tudors.jpg";
import Lake from "../../assets/images/lake.jpg";
import SentiWordNet from "../../assets/images/sentiWordNet_graphic.jpg";
import InDefenceOfPostHocExplainabilityCover from "../../assets/covers/in_defence_cover.png";
import BoundedTruthDiagram from "../../assets/diagrams/In_Defence_Bounded_Truth.png";
import {
  Body,
  CustomLink,
  CustomTextContainer,
  CustomContainer,
  H5,
  List,
  CustomHeadingLink,
  ImageContainer,
  MyImage,
} from "../../styles";
import ArticleCard from "../../components/ArticleCard";

const InDefenceOfPostHocExplainability = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Workshop",
      tagTwo: "NeurIPS 2024",
      heading: "In Defence of Post-hoc Explainability",
      image: InDefenceOfPostHocExplainabilityCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      paperLink: "https://arxiv.org/abs/2412.17883",
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading: (
        <>
          <H5>
            Galileo's telescope had "
            <CustomHeadingLink
              href="https://en.wikipedia.org/wiki/Chromatic_aberration"
              target="_blank"
              rel="noopener noreferrer"
            >
              chromatic aberration
            </CustomHeadingLink>
            " - an optical flaw that produced colored halos that didn't exist.
            Strictly speaking, his instrument was broken, showing false
            information mixed with truth. Today's AI explanation methods (XAI)
            are our chromatic aberration: they distort what’s really happening
            inside the neural network, mixing false signals with real ones. But
            just as Galileo's flawed lens revealed Jupiter's moons, our flawed
            explanations could reveal nature's hidden patterns. Sometimes the
            right discovery comes through the wrong instrument. And that's
            precisely why these methods don't need to be computationally
            faithful to be scientifically useful.
          </H5>
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Crisis Nobody Talks About",
      paragraph: (
        <>
          <Body>
            Every major AI lab studying scientific problems faces the same
            uncomfortable truth. They use explanation methods to understand what
            their models discovered. They publish visualisations showing which
            features matter most. But mathematically, provably, these methods
            don't actually explain what the AI computed.
            <br></br>
            <br></br>
            <CustomLink
              href="https://doi.org/10.1073/pnas.2304406120"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recent proofs demonstrate these explanation tools fail
              catastrophically.
            </CustomLink>{" "}
            They perform worse than random guessing at identifying what neural
            networks actually use. Run the same method twice with slightly
            different settings, get completely different answers. Design
            adversarial examples that fool them trivially.
            <br></br>
            <br></br>
            The mathematical proofs are unambiguous. These methods don't do what
            they claim. And yet, researchers keep using them to generate new
            findings — suggesting that either we’re missing something about
            their hidden value, or that our standards for discovery aren’t what
            we think they are.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "Three Functions, One Paradox",
      paragraph: (
        <>
          <Body>
            Critics evaluate explanation methods by asking whether they
            accurately represent neural network computations. When they don't —
            and they rarely do — the methods are declared broken.
            <br></br>
            <br></br>
            But scientists aren't trying to understand neural networks. They're
            trying to understand reality. The neural network is just a
            sophisticated pattern detector that notices things humans miss.
            <br></br>
            <br></br>
            Consider three nested functions.
            <br></br>
            <List>
              <li>
                <span style={{ fontWeight: "bold" }}>Reality:</span> How nature
                actually works
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Model:</span> What the
                neural network learned (millions of parameters we can't
                interpret)
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Explanation:</span> What
                our methods extract (simplified patterns humans can grasp)
              </li>
            </List>
            <br></br>
            Critics obsess over whether explanations faithfully represent
            models. But what if explanations can be wrong about models while
            revealing truths about reality?
          </Body>
        </>
      ),
      id: 3,
    },
    {
      subheading: "When Broken Methods Find Real Knowledge",
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <CustomLink
              href="https://doi.org/10.1073/pnas.2406675122"
              target="_blank"
              rel="noopener noreferrer"
            >
              A recent study from University of Oxford, Google DeepMind and
              Goodfire AI
            </CustomLink>{" "}
            demonstrates that even when explanation methods misrepresent a
            model's computations, they can still reveal novel insights about the
            world. Researchers extracted chess concepts from AlphaZero — an AI
            that mastered chess through self-play, without human knowledge.
            Their extraction method used convex optimisation to find concept
            vectors in AlphaZero's neural representations.
            <br></br>
            <br></br>
            These vectors don't precisely represent AlphaZero's actual
            computations. The extraction process compresses millions of
            parameters into sparse vectors through lossy approximations. By the
            critics' standards, this method fails.
            <br></br>
            <br></br>
            Yet when these "broken" concept vectors were used to generate
            training puzzles for human experts — including world champions
            Vladimir Kramnik and Hou Yifan — something unexpected happened. One
            grandmaster improved the performance by up to 42% after studying
            positions that exemplified these extracted concepts.
            <br></br>
            <br></br>
            One concept involved quiet moves that improve piece positioning
            while preparing unconventional long-term sacrifices. Grandmaster
            commentary described these as “clever”, "not natural”, and
            containing ideas that were “hard to spot” even after seeing the
            solution. The concepts combined known chess principles in novel ways
            that violated conventional strategic thinking.
            <br></br>
            <br></br>
            The extraction method failed to faithfully represent AlphaZero's
            computations. But it succeeded in identifying patterns that expanded
            human chess knowledge at the highest level.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "Bounded Truth",
      paragraph: (
        <>
          <Body>
            This phenomenon — where broken explanations generate valid insights
            — isn't a fluke. It reflects how knowledge transfers between
            incompatible forms of intelligence through what we call "mediated
            understanding”.
            <br></br>
            <br></br>
            The explanation methods don't directly reveal what neural networks
            compute. Instead, they mediate between two incompatible systems: AI
            that processes information in thousands of dimensions, and humans
            who think in causes and stories. This mediation is necessarily
            lossy, approximate, often wrong. But it creates a bridge where none
            should exist.
            <br></br>
            <br></br>
            Consider how this works in practice. When AlphaZero's millions of
            parameters get compressed into concept vectors, the compression
            destroys most information. The resulting explanation operates within
            what we might call "bounded factivity" — it's only true within
            specific limits and contexts. The explanation isn't universally
            correct; it's correct enough, often enough, to be useful.
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
            This mirrors how science has always progressed. Newtonian mechanics
            is bounded — it works at certain scales, fails at others. The ideal
            gas law assumes molecules have no volume — obviously false, yet
            useful within bounds. These aren't compromises; they're features. By
            accepting bounded truth instead of demanding complete fidelity, we
            enable discovery.
            <br></br>
            <br></br>
            The AlphaZero study demonstrates this perfectly. The extracted
            concepts weren't faithful to the AI's computations, but they
            successfully mediated between machine intelligence and human
            understanding. The bounds were clear: these patterns apply to
            specific chess positions under particular conditions. Within those
            bounds, grandmasters learned something real.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      subheading: "Embracing Broken Tools",
      paragraph: (
        <>
          <Body>
            We're entering an era where AI will be involved in most scientific
            discoveries. Models are finding patterns in everything from protein
            folding to climate dynamics that humans would never notice. We need
            ways to extract insights from these systems.
            <br></br>
            <br></br>
            The crisis isn't that explanation methods are imperfect. It's that
            we expected perfection from a task that's fundamentally about
            translating between incompatible forms of understanding. Every
            scientific instrument makes tradeoffs. Telescopes can't see radio
            waves. Microscopes kill living samples. Explanation methods
            sacrifice computational fidelity for human insight.
            <br></br>
            <br></br>
            The AlphaZero study proves this isn't just philosophy — it's
            practical reality. Broken extraction methods helped world champions
            improve at a game humanity has studied for centuries. If imperfect
            methods can advance human knowledge in chess, imagine what they
            might reveal in genomics, materials science, or medicine.
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
              "In Defence of Post-hoc Explainability" argues that computational
              faithfulness matters less than scientific usefulness. When
              explanation methods fail mathematically but succeed
              scientifically, we should care more about the science. Read the{" "}
              <CustomLink
                href="https://www.arxiv.org/abs/2508.09232"
                target="_blank"
                // rel="noopener noreferrer"
              >
                full paper{" "}
              </CustomLink>
              for the complete framework.
              <br></br>
              <br></br>
              Built with pragmatic incorrectness at socius: Experimental
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

      id: 8,
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
        <title>When Wrong Methods Get Right Answers | socius labs"</title>
        <meta
          name="title"
          content="When Wrong Methods Get Right Answers | socius labs"
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
          content="When Wrong Methods Get Right Answers | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta
          property="og:image"
          content={InDefenceOfPostHocExplainabilityCover}
        />
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
        <ImageContainer>
          <MyImage
            alt={`Diagram for Bounded Truth`}
            src={BoundedTruthDiagram}
          ></MyImage>
        </ImageContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 6)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 7)}
        />
      </CustomTextContainer>

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 8)}
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

export default InDefenceOfPostHocExplainability;
