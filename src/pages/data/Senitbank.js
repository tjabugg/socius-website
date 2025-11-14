import { useState } from "react";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import { Helmet } from "react-helmet";
import VictorianTown from "../../assets/images/victorian_town.jpg";
import SentibankCover from "../../assets/covers/sentibank_cover.png";
import SentibankDiagram1 from "../../assets/diagrams/sentibank_diagram_1.png";
import SentibankDiagram2 from "../../assets/diagrams/sentibank_diagram_2.png";
import SentibankDiagram3 from "../../assets/diagrams/sentibank_diagram_3.png";
import SentibankDiagram4 from "../../assets/diagrams/sentibank_diagram_4.png";
import SentibankDiagram5 from "../../assets/diagrams/sentibank_diagram_5.png";
import Tudors from "../../assets/images/tudors.jpg";
import Lake from "../../assets/images/lake.jpg";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import SentiWordNet from "../../assets/images/sentiWordNet_graphic.jpg";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";

import Github from "../../assets/images/github-mark.svg";
import {
  Body,
  H5,
  CustomLink,
  List,
  CustomCode,
  CustomTextContainer,
  CustomContainer,
} from "../../styles";
import ArticleCard from "../../components/ArticleCard";
import styled from "styled-components";
import ImageCarousel from "../../components/Carousel";
SyntaxHighlighter.registerLanguage("python", python);

const Senitbank = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Publication",
      tagTwo: "ICWSM 2024",
      heading: "sentibank",
      image: SentibankCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      gitLink: "https://github.com/socius-org/sentibank",
      github: Github,
      paperLink: "https://doi.org/10.1609/icwsm.v18i1.31443",
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading:
        "Machines have been trying to decode human emotions since 1962, and they were all doing it differently. Some use ordinal scores (-5 to +5). Others assign discrete labels (positive/negative). A few venture into vector representations across affective dimensions. This was the beautiful chaos of Software 1.0 — handcrafted rules encoding human intuition about emotional language. And after six months of digital archaeology, we realised nobody had ever brought them all together. Until now.",
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Chaos of Sentiment Dictionaries",
      paragraph: (
        <>
          <Body>
            We discovered that sentiment dictionaries — carefully crafted lists
            of words with emotional scores — were scattered across the digital
            universe like fragments of an ancient manuscript. Some lived in
            dusty GitHub repositories as <CustomCode>`.py`</CustomCode> files.
            Others hid in paper appendices as <CustomCode>`.txt`</CustomCode>{" "}
            dumps. A few were trapped in websites as{" "}
            <CustomCode>`.xml`</CustomCode> schemas, while others floated in
            supplementary materials as <CustomCode>`.csv`</CustomCode> files or
            exotic <CustomCode>`.rdf`</CustomCode> formats. <br></br>
            <br></br>Even better, 60% of these “validated” dictionaries
            contained duplicates with conflicting labels. For example, the word
            'smash' appeared in one dictionary scored as both positive{" "}
            <span style={{ fontStyle: "italic" }}>and</span> negative. But the
            problems went deeper than internal inconsistencies. These
            dictionaries were also scattered across completely different
            ecosystems. It was like 15 different research teams had each
            invented their own emotional language, and nobody was talking to
            each other.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "Building the Rosetta Stone of Sentiment",
      paragraph: (
        <>
          <Body>
            So we did what any reasonable researchers would do. We became{" "}
            <em>digital archaeologists</em>. We excavated 15 original sentiment
            dictionaries from across the internet, each with its own origin
            story:
          </Body>
          <List>
            <li>
              <CustomLink
                href="https://psycnet.apa.org/doi/10.1002/bs.3830070412"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Inquirer (1962)
              </CustomLink>
              : The grandfather of them all, categorising words along
              psycholinguistic dimensions when computers still used punch cards.
            </li>
            <li>
              <CustomLink
                href="https://doi.org/10.1609/icwsm.v8i1.14550"
                target="_blank"
                rel="noopener noreferrer"
              >
                VADER (2014)
              </CustomLink>
              : Optimised for social media, because “LOL” and “ugh” needed
              emotional scores too.
            </li>
            <li>
              <CustomLink
                href="https://doi.org/10.17605/OSF.IO/CBM9E"
                target="_blank"
                rel="noopener noreferrer"
              >
                MASTER (2011)
              </CustomLink>
              : Built for financial texts, where “liability” isn't always a
              liability.
            </li>
            <li>
              <CustomLink
                href="https://link.springer.com/article/10.1007/s10115-011-0433-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                DED (2023)
              </CustomLink>
              : Capturing discrete emotions in political communication (anger,
              anxiety, sadness, and that rarest of political emotions —
              optimism).
            </li>
          </List>
        </>
      ),
      id: 3,
    },
    {
      justify: "flex-end",
      subheading: "What We Actually Built",
      paragraph: (
        <>
          <Body>
            After six months of digital archaeology and more data cleaning than
            any human should endure, we created sentibank:
          </Body>
          <List>
            <li>
              <span style={{ fontWeight: "bold" }}>
                15 original dictionaries
              </span>
              : The grandfather of them all, categorising words along
              psycholinguistic dimensions when computers still used punch cards.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                43 preprocessed versions
              </span>
              : Cleaned, deduplicated, and standardised (including experiments
              like <CustomCode>NoVAD_v2013_boosted</CustomCode>).
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Spanning 7 genres and 6 domains
              </span>
              : From social media to financial filings.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>One unified API </span>:
              Because life's too short to parse 15 different file formats.
            </li>
          </List>
          <Body>
            <br></br>
            We turned digital archaeology into a living laboratory. We versioned
            them like code, creating multiple variants because sentiment is
            subjective — what looks like noise to one researcher might be signal
            to another. Want dictionary exactly as published? Done. Want to see
            what happens when we boost emotional intensity based on arousal?
            That's there too. Each dictionary follows a simple naming rule:{" "}
            <CustomCode>
              {"{"}NAME_VERSION{"}"}
            </CustomCode>{" "}
            for the historical original,{" "}
            <CustomCode>
              {"{"}NAME{"}"}_{"{"}VERSION{"}"}_{"{"}EXPERIMENT{"}"}
            </CustomCode>
            for our experimental variations.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "Why This Matters",
      paragraph: (
        <>
          <Body>
            As we transition from
            <CustomLink
              href="https://karpathy.medium.com/software-2-0-a64152b37c35"
              target="_blank"
              // rel="noopener noreferrer"
            >
              {" "}
              Software 1.0 (hand-coded rules) through Software 2.0 (trained
              neural nets)
            </CustomLink>
            , we're trading interpretability for capability. These sentiment
            dictionaries represent the last generation of machine we could fully
            understand — where every decision has a paper trail, every rule has
            an author, and every score has a justification. <br></br>
            <br></br>Every sentiment score tells a story. A specific word,
            assigned a specific value, by a specific researcher, for a specific
            reason. When MASTER scores “liability” as negative, you can trace it
            back to Loughran and McDonald analysing 10-K filings in 2011. When
            VADER scores “lol” at +2.9, that's a weight with a backstory — not
            learned by backpropagation, but the collective wisdom of 10 vetted
            humans voting on how much happiness lives in three letters.
          </Body>
        </>
      ),
      id: 5,
    },
    {
      justify: "flex-end",
      subheading: "Download the Archaeology",
      paragraph: (
        <>
          <Body>
            We've open-sourced everything at{" "}
            <CustomLink
              href="https://github.com/socius-org/sentibank"
              target="_blank"
              // rel="noopener noreferrer"
            >
              our GitHub
            </CustomLink>
            . The codebase is clean, the API is simple, and the dictionaries are
            ready to use. <br></br>
            <br></br>But more importantly, we might need your help. Found a bug?
            Have a sentiment dictionary from 1987 gathering dust in your
            advisor's filing cabinet? Let's pool our resources. Check{" "}
            <CustomLink
              href="https://github.com/socius-org/sentibank/blob/main/doc/CONTRIBUTING.md"
              target="_blank"
              // rel="noopener noreferrer"
            >
              our contribution guidelines
            </CustomLink>{" "}
            and help us expand this archaeological dig.
            <br></br>
            <br></br>Because if we're preserving how Software 1.0 understood
            emotions, we're preserving more than code — we're preserving human
            judgement.
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
              sentibank is available at our{" "}
              <CustomLink
                href="https://github.com/socius-org/sentibank"
                target="_blank"
                // rel="noopener noreferrer"
              >
                GitHub
              </CustomLink>
              . For the academically inclined, read our{" "}
              <CustomLink
                href="https://doi.org/10.1609/icwsm.v18i1.31443"
                target="_blank"
                // rel="noopener noreferrer"
              >
                paper
              </CustomLink>
              . For the practically minded:{" "}
            </span>
            <CustomCode>pip install sentibank</CustomCode>{" "}
            <span style={{ fontStyle: "italic" }}>
              in Python and start experimenting.<br></br>
              <br></br>Built with intellectual mischief at socius: Experimental
              Intelligence Lab.
            </span>
          </Body>
        </>
      ),
      id: 7,
    },
    {
      justify: "space-between",
      subheading: "sentibank",
      paragraph: "Sixty years of emotion dictionaries. One import statement.",
      paragraphButton: "View all",
      link: "https://socius-org.github.io/sentibank/about.html",
      target: "blank",

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
      target: "blank",
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
      target: "blank",
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
      target: "blank",
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
      target: "blank",
    },
  ]);

  const codeString = `from sentibank import archive
# Load a dictionary
load = archive.load()
vader = load.dict("VADER_v2014")

# Analyze some text
from sentibank.utils import analyze
analyzer = analyze()

# Score-based analysis
text = "I am excited and happy about the new announcement!"
result = analyzer.sentiment(text=text, dictionary="VADER_v2014")
# Returns: +4.1

# Label-based analysis
text = "Our shareholders will be pleased with these results"
result = analyzer.sentiment(text=text, dictionary="MASTER_v2022")
# Returns: {'Positive': 1, 'Negative': 0, 'Uncertainty': 0, ...}";
`;
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>How Software 1.0 Understood Emotions | socius labs</title>
        <meta
          name="title"
          content="How Software 1.0 Understood Emotions | socius labs"
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
          content="How Software 1.0 Understood Emotions | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={SentibankCover} />
      </Helmet>
      <PublicationHero publicationHeroes={publicationHeroes} />
      <CustomTextContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 10)}
        />{" "}
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />{" "}
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
        />
        <ImageCarousel
          images={[
            SentibankDiagram1,
            SentibankDiagram2,
            SentibankDiagram3,
            SentibankDiagram4,
            SentibankDiagram5,
          ]}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
        <CodeContainer>
          <CodeInner>
            <H5>The API That Makes It All Work</H5>
            <StyledSyntaxHighlighter
              language="python"
              style={dracula}
              // showLineNumbers
              wrapLines
            >
              {codeString}
            </StyledSyntaxHighlighter>
            <Body>
              <br></br>
              No more hunting through journal websites for that one CSV buried
              in “supplementary_material_v3_revised.zip”. No more parsing
              ancient file formats. Just{" "}
              <CustomCode>pip install sentibank</CustomCode> and you inherit an
              encyclopaedic hub of 15 sentiment dictionaries — 60 years of
              emotional archaeology in a single import statement. simple naming
              rule:
            </Body>
          </CodeInner>
        </CodeContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
        />
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

export default Senitbank;

// Outer wrapper — aligns content
const CodeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* margin: 2rem 0; */
`;

// Inner wrapper — controls actual code width + positioning
const CodeInner = styled.div`
  width: 40%;
  border-radius: 20px;

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 20px !important;
  padding: 16px !important;
  margin: 16px 0px !important;
  font-size: 0.9rem;
  background: #0d1117 !important;
  line-height: 1.5;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
  white-space: pre-wrap !important;
  word-break: break-word;
`;
