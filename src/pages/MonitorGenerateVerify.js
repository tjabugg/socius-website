import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import PublicationHero from "../components/PublicationHero";
import { Helmet } from "react-helmet";
import VictorianTown from "../assets/images/victorian_town.jpg";
import Tudors from "../assets/images/tudors.jpg";
import Lake from "../assets/images/lake.jpg";
import SentiWordNet from "../assets/images/sentiWordNet_graphic.jpg";
import MonitorGenerateVerifyCover from "../assets/covers/monitor_generate_verify_cover.png";
import {
  Body,
  CustomLink,
  CustomCode,
  CustomTextContainer,
  CustomContainer,
} from "../styles";
import ArticleCard from "../components/ArticleCard";

const MonitorGenerateVerify = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Workshop",
      tagTwo: "NeurIPS 2025",
      heading: "Monitor-Generate-Verify",
      image: MonitorGenerateVerifyCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      justify: "flex-end",
      share: "Share",
      subheading:
        "We discovered that sentiment dictionaries — carefully crafted lists of words with emotional scores — were scattered across the digital universe like fragments of an ancient manuscript. Some lived in dusty GitHub repositories as .py files. Others hid in paper appendices as .txt dumps. A few were trapped in websites as .xml schemas, while others floated in supplementary materials as .csv files or exotic .rdf formats.",
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: (
        <>
          <Body>
            There's a moment in every conversation with an advanced language
            model where{" "}
            <CustomLink
              href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              it confidently explains its reasoning, and you realise it's lying
            </CustomLink>{" "}
            Not maliciously. It simply has no access to its own cognitive
            process. When your AI agent can't reliably monitor its own thinking,
            how can it know when it's uncertain, when it needs more information,
            or when it should refuse to answer? We went looking for answers in
            psychology papers from 1979. What we found was a blueprint that's
            been waiting 45 years to be translated into mathematics.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "The Current Playbook Isn't Working",
      paragraph: (
        <>
          <Body>
            Recent advances in self-refinement models have predominantly adopted
            a Generate-Verify (G-V) structure to enhance reasoning performance
            through iterative feedback mechanisms. Think of G-V like drafting
            and editing: first you write something (Generate), then you review
            it for errors or improvements (Verify). If it's not good enough, you
            rewrite and review again, continuing this cycle until you're
            satisfied.
            <br></br> <br></br>
            Despite these advances, G-V approaches share a fundamental
            limitation. They commence generation without first assessing task
            characteristics or retrieving relevant problem-solving strategies.{" "}
            <CustomLink
              href="https://arxiv.org/abs/2505.07787"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Luo et al. (2025)
            </CustomLink>{" "}
            found that models starting with the wrong approach suffer a 20%
            performance hit and rarely recover, even with multiple rounds of
            verification. They call it the 'prefix dominance trap'. Think of it
            as cognitive lock-in, where initial missteps become permanent
            despite repeated attempts at correction.
            <br></br> <br></br>
            It's like trying to fix a wrong turn by driving faster. Once you're
            heading the wrong direction, no amount of acceleration helps.
          </Body>
        </>
      ),
      id: 3,
    },
    {
      justify: "flex-end",
      subheading: "Humans Don't Just Generate-Then-Fix",
      paragraph: (
        <>
          <Body>
            G-V assumes you can fix bad starts through better verification. But
            we don't just generate-then-verify. We monitor first, always.
            <br></br> <br></br>
            In 1979,{" "}
            <CustomLink
              href="https://doi.org/10.1016/S0079-7421(08)60053-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              John Flavell laid out a theory of how metacognition works in
              humans. A decade later, Thomas Nelson and Louis Narens refined
              these ideas specifically for memory and learning
            </CustomLink>{" "}
            Their frameworks describe metacognition as a control systmgvwith
            monitoring and control loops — where cognitive self-monitoring by
            higher-order processes generates signals for strategic control,
            forming continuous feedback loops between observation and control.
            <br></br> <br></br>
            The key insight? Before humans tackle a problem, we assess it. We
            gauge difficulty. We retrieve relevant strategies. We consider our
            confidence. This all happens often below conscious awareness. But it
            happens. And it fundamentally shapes how we approach the task.
            <br></br> <br></br>
            This metacognitive monitoring isn't perfect. Sometimes we're
            overconfident. Sometimes we underestimate difficulty. But having
            this system (even imperfectly) is vastly better than charging ahead
            blindly.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "The Translation Project",
      paragraph: (
        <>
          <Body>
            So we did what engineers do when they find a good idea gathering
            dust. We tried to formalise it. To take Flavell's and Nelson &
            Narens' psychological theories and translate them into mathematical
            language that machines could, theoretically, implement. <br></br>
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
            The Monitor-Generate-Verify (MGV) framework attempts to capture what
            psychologists have observed. Think of it like this. Before you solve
            any problem, your brain runs a quick diagnostic. Monitoring is that
            moment when you look at a math problem and instantly know it's going
            to be brutal (what Flavell calls "feelings of difficulty"),
            instantly size up whether material looks learnable (what Nelson &
            Narens call "ease of learning"), or have that tip-of-the-tongue
            sensation where you know you know it (”feeling of knowing”).
            Generation takes those signals and decides what to do — should I
            work through this step-by-step or just move on? Finally,
            verification checks if it worked and files that information away for
            next time.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      subheading: "What We've Translated (And What We Haven't)",
      paragraph: (
        <>
          <Body>
            We thought we were being clever, packaging human metacognition into
            three sequential functions. But the problem is, thinking about
            thinking resists such tidy decomposition. The framework captures
            what happens when minds monitor themselves, but not the fundamental
            mystery of why there's something it's like to do so. We can
            architect systems that monitor their own processes, adjust
            strategies, and learn from outcomes. What we can't architect is the
            observer behind the observations — the part that experiences doubt,
            feels confusion, or recognises patterns with that peculiar sense of
            ‘aha’. <br></br>
            <br></br>We're left holding a map of something we can't actually
            visit. What it does is map its contours and boundaries, translating
            Flavell's and Nelson & Narens' theories into the mathematical
            language needed to eventually bridge it. We've sketched rough maps
            of territory that's existed in human minds: territory that
            psychologists have been exploring for decades, which we're now
            trying to describe in computational terms.
            <br></br>
            <br></br>In this work, we were more like translators, taking field
            notes written in the language of psychology and converting them into
            mathematical specifications. This is our earnest attempt at
            mathematising psychology — an interpretation that involved both
            necessary simplification and, we suspect, occasional
            overinterpretation of what Flavell and Nelson & Narens meant. But
            it's a start. A bridge between what we know about human
            metacognition and what we might build into machines.
            <span style={{ fontWeight: "bold" }}>
              Here's where we're supposed to end. But honestly? If you're
              thinking “okay, but does this actually work?” — we had the same
              question. We couldn't help ourselves. One weekend, too much
              caffeine, and a copy of <CustomCode>Llama-3.1-8B</CustomCode>{" "}
              later, we had our answer. It worked. (Sort of.) <br></br>
              <br></br>Read how we implemented Flavell's theories in
              <CustomLink
                href="/Before-You-Think-Monitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Before You
                {" <think> "}, Monitor
              </CustomLink>{" "}
            </span>
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
              Monitor-Generate-Verify represents theoretical work in
              computational metacognition. These are blueprints, maps with
              unexplored territories. Read the{" "}
              <CustomLink
                href="https://doi.org/10.1609/icwsm.v18i1.31443"
                target="_blank"
                // rel="noopener noreferrer"
              >
                working paper
              </CustomLink>{" "}
              for (in)complete mathematical specifications.
              <br></br>
              <br></br>
              Built with theoretical rigour at socius: Experimental Intelligence
              Lab
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
        <title>Thinking About Thinking for Machines | socius labs</title>
        <meta
          name="title"
          content="Thinking About Thinking for Machines | socius labs"
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
          content="Thinking About Thinking for Machines | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={MonitorGenerateVerifyCover} />
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

export default MonitorGenerateVerify;
