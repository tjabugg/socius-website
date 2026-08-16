import { useState } from "react";
import styled from "styled-components";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import Seo from "../../components/Seo";
// Cover: the In Defence pattern artwork, adopted for this paper while that
// page is offline for its journal revision.
import ReliabilityCover from "../../assets/covers/in_defence_cover.png";
import DoubleDescentFigure from "../../assets/diagrams/limits_double_descent.png";
import {
  Body,
  Caption,
  CustomLink,
  CustomTextContainer,
  H5,
  ImageContainer,
  MyImage,
} from "../../styles";

const ARXIV = "https://arxiv.org/abs/2606.29346";

const LimitsOfPostHocExplanations = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Workshop",
      tagTwo: "ICML 2026",
      heading:
        "Reliability, Faithfulness, and the Limits of\nPost-hoc Explanations of Opaque Scientific Models",
      image: ReliabilityCover,
      imageAlt:
        "A pale green socius pattern of rounded corner and line motifs",
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
          <H5>
            Suppose you train a deep neural network model that predicts a
            natural phenomenon almost perfectly, and you produce an
            explanation that reports
            exactly what the model computes. It feels as though you have
            learned how nature works. Our new paper argues that you have
            not. A reliable model tracks the world's outcomes, and a
            faithful explanation tracks the model, yet nothing in that
            chain ever checks whether the model works the way the world
            works. A claim about nature's structure requires precisely that
            missing check.
          </H5>
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Chain Everyone Leans On",
      paragraph: (
        <>
          <Body>
            Science has long begun with parsimonious models. A few
            parameters, each manually conceptualised, operationalised, and
            written down by a scientist for a reason, so that understanding
            came bundled with building. The preference had a practical
            backbone. Give a model too many parameters and it was expected
            to memorise its data rather than learn anything. Lately the
            habit has started to wobble. Enormously complex models now
            routinely match or beat simple ones at prediction, and models
            whose parameters far outnumber their data can settle into
            smooth, robust fits. The pattern is known as double descent,
            and{" "}
            <CustomLink
              href="https://doi.org/10.1073/pnas.2401230121"
              target="_blank"
              rel="noopener noreferrer"
            >
              a recent PNAS perspective asks whether Ockham's razor is
              losing its edge
            </CustomLink>
            .
            <br></br>
            <br></br>
            In much of practice the order of work has already turned around.
            Researchers begin with an opaque deep neural network that
            predicts well, and understanding becomes something to recover
            afterwards. So across
            neuroscience, physics, biochemistry, medicine, and economics,
            the same workflow now repeats. Train a deep network
            on a phenomenon until it predicts well. Run a post-hoc
            explanation method over it, such as SHAP, LIME, saliency maps,
            or concept attributions. Then read the explanation as insight
            into the phenomenon itself. The model relies on this feature, so
            nature must too.
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
            Before anyone trusts the workflow, two boxes must be ticked. The
            model must be{" "}
            <span style={{ fontStyle: "italic" }}>reliable enough</span>,
            meaning its predictions match the phenomenon's outcomes to the
            field's satisfaction. The explanation must be{" "}
            <span style={{ fontStyle: "italic" }}>faithful enough</span>
            <sup>*</sup>, meaning it reports what the model actually
            computes. Pass both, the thinking goes, and the explanation
            stops being a fact about a network and becomes a finding about
            the world.
            <br></br>
            <br></br>
            Our paper examines that last step. The setup is a chain with
            two links, one running from the phenomenon to the opaque model
            that approximates it, and the other from the model to the
            explanation that approximates the model. The question is what
            actually travels down the chain.
          </Body>
        </>
      ),
      id: 3,
    },
    {
      justify: "flex-end",
      subheading: "Two Checks, Neither About the World",
      paragraph: (
        <>
          <Body>
            Let's look closely at what each of those checks actually
            confirms. Reliability
            compares the model's outputs with the phenomenon's outcomes.
            When the record is good, you gain reason to trust the
            predictions, even though you cannot see how they are produced.
            Philosophers of science have defended just this kind of
            justification for{" "}
            <CustomLink
              href="https://doi.org/10.1007/s11023-018-9481-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              opaque computation
            </CustomLink>{" "}
            and for{" "}
            <CustomLink
              href="https://doi.org/10.1093/bjps/axz035"
              target="_blank"
              rel="noopener noreferrer"
            >
              machine learning models
            </CustomLink>{" "}
            in particular. What entitles the belief lives outside the model,
            in its history of agreement with the world.
            <br></br>
            <br></br>
            Faithfulness compares the explanation with the model. A faithful
            explanation correctly reports which features the model relies on
            and what it computes. That is a statement about a description of
            the machinery, and it is settled entirely inside the model. The
            world never enters.
            <br></br>
            <br></br>
            The scientist wants something different from either. They want
            reason to believe that a structure recovered from the model,
            perhaps a feature, a concept, or a counterfactual relation,
            corresponds to how the phenomenon is actually organised. One
            check looks at outputs. The other looks at a description of the
            machinery. Neither ever takes the phenomenon's structure as an
            input, and two checks that never look at a thing cannot settle
            anything about it.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "Perfection Doesn't Close the Gap",
      paragraph: (
        <>
          <Body>
            The tempting reply is that the gap narrows as the model and the
            explanation improve, until a perfectly faithful account of a
            perfectly reliable model becomes, in effect, an account of the
            phenomenon. It does not, and the reason is structural rather
            than practical.
            <br></br>
            <br></br>
            Tracking a phenomenon's outcomes does not require sharing its
            structure.{" "}
            <CustomLink
              href="https://doi.org/10.1017/psa.2023.151"
              target="_blank"
              rel="noopener noreferrer"
            >
              Machine learning models often do not represent the world the
              way their targets are put together
            </CustomLink>
            , and they lean on correlations far removed from the causal
            relationships responsible for the data. A model can predict
            everything and still work nothing like the thing it predicts.
            And since the true function behind a phenomenon is exactly what
            nobody knows, agreement with outcomes is the only test on
            offer, and it is a test a structurally wrong model can pass in
            full.
            <br></br>
            <br></br>
            Sharpening faithfulness does not change this. A circuit-level
            account of a network is more informative than a saliency map,
            but it is more informative about the network.
            <br></br>
            <br></br>
            Scientific practice quietly concedes the point. No researcher
            who trains a network and produces a clean feature attribution
            publishes, on that basis alone, a claim that the feature is
            mechanistically responsible for the phenomenon. They check the
            literature, compare against systems whose mechanisms are already
            known, and design a follow-up experiment. What looks like
            methodological caution is a tacit admission that reliability and
            faithfulness alone do not settle what a mechanistic claim
            requires. The missing premise, that model and phenomenon share
            structure, always arrives from outside the chain.
          </Body>
        </>
      ),
      id: 5,
    },
    {
      justify: "flex-end",
      subheading: "Candidates, Not Conclusions",
      paragraph: (
        <>
          <Body>
            So what survives? The paper separates two ambitions. The strong
            reading treats the chain as establishing how nature actually
            works. If the model's computation runs through some feature,
            then nature must run through it too. That reading fails, and it
            fails at the limit of perfect reliability and faithfulness as
            firmly as in any real case.
            <br></br>
            <br></br>
            The weak reading treats the chain as a source of candidates,
            possible structures worth investigating and hypotheses worth
            testing against the phenomenon. This reading survives, with a
            condition. A faithful description of a reliable model is, on its
            own, a description of an impressive instrument. Nothing inside
            it marks which recovered features bear on nature and which are
            artefacts of the training data. A description becomes a
            candidate hypothesis only when something external supports it,
            whether prior theory it fits, convergent evidence from systems
            already understood, or an experiment it could fail.
            <br></br>
            <br></br>
            None of this makes explanation methods useless in science. It
            relocates their contribution. They are not the end of an inquiry
            but the beginning of one, generators of questions that the
            phenomenon itself must answer. Explanations propose. The world
            disposes.
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
              Built with carefully drawn limits at socius: Experimental
              Intelligence Lab.
            </span>
          </Body>
        </>
      ),
      id: 8,
    },
  ]);

  return (
    <>
      <Seo
        title="When Perfect Explanations Are Not Enough | socius labs"
        description="Reliability checks the model against the world, and faithfulness checks the explanation against the model. Neither checks whether the model works as nature works. PhilML workshop, ICML 2026."
        image={ReliabilityCover}
        path="/research/limits-of-post-hoc-explanations"
        type="article"
        datePublished="2026-06-28"
        authors={["Nick Oh", "Helen Jin"]}
        sameAs={[ARXIV]}
      />
      <PublicationHero publicationHeroes={publicationHeroes} />
      <CustomTextContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
        />
        <FootnoteWrap>
          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
          />
          <SideNote>
            * We adopt the locutions &ldquo;reliable enough&rdquo; and
            &ldquo;faithful enough&rdquo; in the spirit of{" "}
            <a
              href="https://doi.org/10.7551/mitpress/9780262036535.001.0001"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Elgin&rsquo;s &ldquo;true enough&rdquo;
            </a>
            , on which a representation&rsquo;s acceptability is not
            absolute but depends on whether the larger body of discourse it
            figures in, such as argument, explanation, or theory.
          </SideNote>
        </FootnoteWrap>
        <ImageContainer>
          <MyImage
            alt="Figure with the double-descent curve on the left and four fit panels on the right. The curve of prediction error against polynomial degree dips, rises to a sharp peak where the model can memorise its data, and descends to its lowest plateau, with the degree-one-thousand marker sitting below the degree-three marker. The panels fit polynomials of degree one, three, twenty, and one thousand to the same scattered data; the line underfits, the cubic catches the broad shape, the degree-twenty fit oscillates far beyond the panel, and the degree-one-thousand fit smoothly tracks the finer structure."
            src={DoubleDescentFigure}
          ></MyImage>
        </ImageContainer>
        <Caption>
          <b>The double descent of prediction error.</b> Left, prediction
          error on new data as a polynomial model grows. Error peaks where
          the model has just enough parameters to memorise its data, then
          falls again as parameters keep growing, and the
          degree-one-thousand model ends up ahead of the cubic. Right, the
          fits behind four points on that curve, to the same noisy sample.
          A straight line is too simple, a cubic catches only the broad
          shape, a degree-twenty model swings wildly between the points,
          and a degree-one-thousand model settles into a smooth fit that
          also tracks the finer structure. Adapted from{" "}
          <a
            href="https://doi.org/10.1073/pnas.2401230121"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Dubova et al. (2025)
          </a>
          , after{" "}
          <a
            href="https://doi.org/10.1088/1742-5468/ac3a74"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Nakkiran et al. (2021)
          </a>
          .
        </Caption>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 7)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 8)}
        />
      </CustomTextContainer>
    </>
  );
};

export default LimitsOfPostHocExplanations;

// The article column sits right-justified at 40% width, leaving the left
// margin free; the footnote lives there, Tufte-style, beside the passage
// that introduces the two locutions.
const FootnoteWrap = styled.div`
  position: relative;
  /* This block continues the section above; pull it up so the container's
     40px gap reads like the one-line break used inside a block. */
  margin-top: -16px;
`;

const SideNote = styled.p`
  position: absolute;
  top: 4px;
  left: 0;
  width: 30%;
  max-width: 46ch;
  font-family: "GeneralSans";
  font-size: 13px;
  line-height: 1.55;
  color: #b9b4b0;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: none;
    margin-top: 12px;
  }
`;
