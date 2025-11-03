import { useState } from "react";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import { Helmet } from "react-helmet";
import System15Cover from "../../assets/covers/system1.5_cover.png";
import InterferenceDiagram from "../../assets/diagrams/System1.5_Interference_Diagram.png";
import TrainingDiagram from "../../assets/diagrams/System1.5_Training_Diagram.png";
import NeurIPS2024 from "../../assets/videos/Nick_NeurIPS2024.mp4";
import {
  Body,
  CustomLink,
  CustomTextContainer,
  CustomContainer,
  ImageContainer,
  MyImage,
} from "../../styles";
import GraphicCard from "../../components/GraphicCard";

const System15 = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Workshop",
      tagTwo: "NeurIPS 2024",
      heading: "System 1.5",
      image: System15Cover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      paperLink: "https://neurips.cc/virtual/2024/104306",
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading:
        "Watch a chess master play blitz. Most moves take under a second — pure pattern recognition. Occasionally they pause, calculate deeply. But here's what everyone misses: many critical moves take 2-3 seconds. Not instant. Not prolonged. They recognise patterns, generate options, quickly verify. That in-between space? That's where expertise lives. Could machines learn to operate in this space between pure pattern matching and deep calculation? That in-between space became our obsession. System 1.5 is what emerged when we tried to map it.",
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "Between Thinking Fast and Slow",
      paragraph: (
        <>
          <Body>
            Everyone treats System 1 and System 2 like binary switches.{" "}
            <CustomLink
              href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thinking Fast or Slow
            </CustomLink>
            . Intuitive or analytical. Pattern matching or logical reasoning.
            <br></br>
            <br></br>
            But watch a chess master play. Sometimes they move instantly — pure
            pattern recognition. Sometimes they pause, calculate variations. But
            most moves? They're somewhere in between. They recognise the
            position type, consider a few promising options, then verify their
            intuition with just enough calculation.
            <br></br>
            <br></br>
            That in-between space — that's where expertise lives. Not in pure
            intuition or pure analysis, but in knowing how to blend them.
            Kenneth Hammond called this the{" "}
            <CustomLink
              href="https://doi.org/10.1109/TSMC.1987.6499282"
              target="_blank"
              rel="noopener noreferrer"
            >
              “intuitive-analytical continuum”
            </CustomLink>{" "}
            back in 1987 — most real decisions involve “quasirationality”, a
            fluid mixture of both modes. We call that dial System 1.5.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      heading: "The Architecture of Doubt",
      subheading: "Learning with Human Masters Feedback",
      paragraph:
        "System 1.5 learns like a chess student working with a master — through thousands of practice positions, each teaching something different. The system develops three specialised capabilities through an iterative process.",
      id: 3,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            Picture iteration 47 of training. The Generator creates multiple
            solutions for every problem in the training set — imagine it
            proposing five different ways to handle the same chess position. A
            grandmaster sits at her screen, clicking through each one.
            "Preferred. Not preferred. Preferred. Definitely not. Oh, this one's
            interesting — preferred”"
            <br></br>
            <br></br>
            But there's another layer. Each problem also gets tagged with a
            familiarity score from 0 to 1. How does this happen? We don't know
            (yet, but we are working on it) — it could be how often similar
            positions appear in the data, what the model's internal state
            suggests, or even a human expert's gut feeling about whether this is
            a common or rare situation. The key insight isn't how familiarity
            gets measured, but that it gets measured at all.
            <br></br>
            <br></br>
            After generating and labelling thousands of solutions, the Verifier
            trains on both the preferred and not-preferred solutions, learning
            to distinguish what makes some approaches better than others. And
            the Monitor trains on those familiarity scores alongside the
            preferences, developing a sense for when the system is in familiar
            versus novel territory.
            <br></br>
            <br></br>
            Week by week, iteration by iteration, the Generator gets better at
            producing solutions humans prefer, the Verifier sharpens its ability
            to spot quality, and the Monitor develops a{" "}
            <span style={{ fontStyle: "italic" }}>feeling </span> of "I've seen
            this before" versus "this is new".
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "Playing Without Feedback",
      paragraph: (
        <>
          <Body>
            Eventually, every student must play without their teacher watching.
            The system faces new problems alone.
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
            A position appears. The Monitor instantly returns a number — say
            0.73. This single value, this degree of familiarity, orchestrates
            everything that follows.
            <br></br>
            <br></br>
            Above 0.8 means deep familiarity. The Generator produces just one
            solution. No second-guessing. This is the master's instant
            recognition — the pattern is clear, the move obvious. Trust and
            execute.
            <br></br>
            <br></br>
            Between 0.3 and 0.8 — like our 0.73 — triggers something more
            careful. The Generator produces multiple solutions (more when less
            familiar, fewer when more familiar). The Verifier examines each one,
            applying everything it learned about quality during training. This
            is the sweet spot where most expertise lives: generating a few
            strong candidates and quickly selecting the best.
            <br></br>
            <br></br>
            Below 0.3 signals unknown territory. Now the system pulls out all
            stops — maximum solution generation, calling in System 2's
            analytical machinery. When truly lost, you need every tool
            available.
            <br></br>
            <br></br>
            This graduated response reflects the heart of expertise. It's not
            about always thinking hard or always thinking fast. It's about{" "}
            <span style={{ fontStyle: "italic" }}>knowing how</span> hard to
            think — investing cognitive effort proportional to uncertainty. The
            familiar gets rapid treatment. The unusual gets careful
            consideration. The alien gets everything you've got. That adaptive
            calibration. That's what separates expertise from mere pattern
            matching. That's what we attempt with System 1.5 — adaptive doubt
            for machines.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      subheading: "What's Missing and What's Flexible",
      paragraph: (
        <>
          <Body>
            Looking back, we realised mid-project that System 1.5 only partially
            mirrors human expertise development.
            <br></br>
            <br></br>
            Consider how chess masters actually develop. Yes, they study
            thousands of games, absorbing patterns. But they also spend hours in
            post-game analysis, working through variations with engines,
            understanding <span style={{ fontStyle: "italic" }}>why</span>{" "}
            certain moves work. Each analysis session is deliberate practice:
            System 2 methodically examining positions, calculating variations,
            discovering principles. Over time, these analytical insights
            crystallise into intuition. What once required conscious calculation
            (e.g., “if I push this pawn, they'll attack here, I'll defend there,
            creating weakness on the kingside”) becomes an instant feeling
            (e.g., “this pawn push feels wrong”).
            <br></br>
            <br></br>
            Our current framework captures pattern absorption but misses this
            crystallisation process. The system learns from human preferences,
            developing taste and judgment. But it doesn't experience that
            transformation where System 2's discoveries become System 1's
            intuitions. In human expertise, slow thinking doesn't just verify
            fast thinking — it creates it. Every principle discovered through
            analysis eventually becomes a pattern recognised instantly.
            <br></br>
            <br></br>
            Imagine if, during training, System 2 could analyse why certain
            solutions work, extract principles, and feed these insights back to
            System 1. Not just "this move is preferred" but "this move is
            preferred because it follows the principle of controlling the centre
            while maintaining king safety". Over iterations, these principles
            would compile into patterns, creating intuitions grounded in
            analytical understanding rather than statistical correlation.
            <br></br>
            <br></br>
            But we left the actual implementations of System 1 and System 2 open
            on purpose.
            <br></br>
            <br></br>
            The framework is intentionally agnostic. System 1 could be
            transformers today, something else tomorrow. System 2 could be
            symbolic reasoning, LRMs, external tools, or all of the above.
            System 1.5 doesn't care. It just manages the clutch between fast and
            slow, trusting and verifying, knowing and doubting.
            <br></br>
            <br></br>
            This means the framework transcends any particular implementation.
            By defining the relationship rather than the entities, System 1.5
            becomes a blueprint for coordination rather than a specific
            architecture. As better System 1s emerge (faster pattern matching)
            and System 2s evolve (deeper reasoning), the framework remains
            relevant. The question isn't "what are the best components?" but
            "how do different types of thinking best work together?”
          </Body>
        </>
      ),
      id: 7,
    },
    {
      justify: "flex-end",
      subheading: "Beyond the Dichotomy",
      paragraph: (
        <>
          <Body>
            System 1.5 isn't about AI systems that think fast OR slow. It's
            about systems that know when to think fast, when to think slow, and
            when — like most experts most of the time — to operate in that
            productive space between.
            <br></br>
            <br></br>
            Human expertise was never about having separate systems for
            intuition and analysis. The chess master doesn't see the board with
            System 1 and calculate with System 2. They operate with something
            more sophisticated — a single intelligence that fluidly adjusts its
            confidence, sometimes trusting patterns, sometimes verifying them,
            often doing both simultaneously. Intuition guides search. Search
            refines intuition. The boundary we've been drawing doesn't exist.
            <br></br>
            <br></br>
            What if intelligence is this continuous negotiation between pattern
            and principle, recognition and reasoning, knowing and doubting?
            System 1.5 represents our attempt to operationalise that question.
            We've built a framework where machines adjust confidence based on
            familiarity — a crude approximation of human doubt, perhaps.
            <br></br>
            <br></br>
            We're probably wrong about parts of this. But by building systems
            that modulate their certainty, we've at least made the question
            testable. Even if it's the wrong model of intelligence, it's a
            useful wrong model. And in the space between wrong and useful,
            that's where discoveries live.
          </Body>
        </>
      ),
      id: 8,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <span style={{ fontStyle: "italic" }}>
              System 1.5 proposes a theoretical framework for metacognitive
              regulation in artificial systems. Implementation details and
              mathematical specifications available in our{" "}
              <CustomLink
                href="https://neurips.cc/virtual/2024/104306"
                target="_blank"
                // rel="noopener noreferrer"
              >
                working paper
              </CustomLink>{" "}
              .<br></br>
              <br></br>
              Built with metacognitive ambition at socius: Experimental
              Intelligence Lab.
            </span>
          </Body>
        </>
      ),
      id: 9,
    },
    {
      justify: "space-between",
      subheading: "Discover more",
      id: 10,
    },
  ]);
  const [graphicCards] = useState([
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      video: NeurIPS2024,
      bgColour: "#51DA4C",
      textColour: "#FFFFFF",
      heading: "Neural Information Processing Systems 2024 Conference",
      paragraph:
        " In Defence of Post-hoc Explainability and Designing Metacognition in Artificial Intelligence",
      alt: "A 17th century painting of Chickens and Ducks by Melchior d' Hondecoeter",
      id: 1,
      link: "https://www.linkedin.com/posts/nick-sh-oh_neurips2024-system1-system2-activity-7275036516656025600-vb8a?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAZmYEBOfRdQjr4gXNOLk3ELwWkedXIQmU",
      target: "blank",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Between Fast and Slow Thinking of Machines | socius labs</title>
        <meta
          name="title"
          content="Between Fast and Slow Thinking of Machines | socius labs"
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
          content="Between Fast and Slow Thinking of Machines | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={System15Cover} />
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
        <ImageContainer>
          <MyImage alt={`Diagram for training`} src={TrainingDiagram}></MyImage>
        </ImageContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
        />
        <ImageContainer>
          <MyImage
            alt={`Diagram for interference`}
            src={InterferenceDiagram}
          ></MyImage>
        </ImageContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 6)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 7)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 8)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 9)}
        />
      </CustomTextContainer>

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 10)}
        />
        <GraphicCard graphicCards={graphicCards} grid="1fr" />
      </CustomContainer>
    </>
  );
};

export default System15;
