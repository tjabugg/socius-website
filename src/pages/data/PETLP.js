import { useState } from "react";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import { Helmet } from "react-helmet";
import ExtractionChannelDiagram from "../../assets/diagrams/PELTP_Extraction_Channels.png";
import PELTPCover from "../../assets/covers/peltp_cover.png";
import {
  Body,
  CustomLink,
  CustomTextContainer,
  ImageContainer,
  MyImage,
} from "../../styles";

const PETLP = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "Publication",
      tagTwo: "AIES 2025",
      heading: "PETLP",
      image: PELTPCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      paperLink: "https://www.arxiv.org/abs/2508.09232",
      justify: "flex-end",
      share: "Share",
      paper: "Read the paper",
      subheading:
        "Modern AI researchers don't just need GPUs and datasets — they need lawyers, or at least the ability to think like them. A single social media post triggers three separate legal interpretations. Copyright lawyers see intellectual property. Privacy regulators see personal data that must be anonymised. Platform lawyers see terms of service that prohibit your scraping. Each force is real, binding, and sometimes directly contradictory. After eighteen months charting these overlapping obligations, we built PETLP: a navigation system for researchers caught between scientific necessity and legal uncertainty.",
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Access Wars",
      paragraph: (
        <>
          <Body>
            Remember when social media data was accessible for research? The
            golden age when downloading tweets didn't cost more than most
            people's rent.
            <br></br>
            <br></br>By 2025, that era had thoroughly ended. CrowdTangle is dead
            (Meta cited shifting priorities). Pushshift is gone (Reddit claimed
            API violations). Twitter's Academic API now costs more than most
            research grants. Each platform has its reasons: limitations in
            providing a comprehensive view of platform activities, terms
            breaches, business models, sometimes privacy. Yet the same data
            remains available commercially through enterprise tiers and
            partnerships. When NYU researchers bypassed these restrictions using
            consented user data, Facebook didn't debate the ethics — they{" "}
            <CustomLink
              href="https://cyber.nyu.edu/2021/08/21/facebook-disables-ad-observatory-academicians-and-journalists-fire-back/"
              target="_blank"
              rel="noopener noreferrer"
            >
              banned the accounts
            </CustomLink>
            .<br></br>
            <br></br>The regulatory environment offers no refuge. Only
            multiplication of uncertainty. Europe's privacy law (GDPR) says
            researchers get special exemptions, but won't tell you what counts
            as “research”. The copyright law says you can mine data for
            “research”, but stays silent on whether training AI is ok. When
            pressed,{" "}
            <CustomLink
              href="https://ec.europa.eu/newsroom/article29/items/611236/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              the European Data Protection Board admits that making social media
              truly anonymous is “difficult”
            </CustomLink>
            . It's like being given driving directions where every other turn is
            “maybe left, possibly straight, definitely not right unless it's
            Thursday”, and the destination is just marked as “somewhere legal,
            probably”.
            <br></br>
            <br></br>
            After watching these access battles destroy years of research, we
            stopped waiting for regulatory clarity and built our own navigation
            system.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "Building PETLP: Structure for the Unstructured",
      paragraph: (
        <>
          <Body>
            PETLP stands for Privacy-by-design Extract, Transform, Load, and
            Present. It's the classic data pipeline with two modifications:
            privacy embedded from the start, and a fourth phase acknowledging
            that publishing research creates entirely new legal challenges.
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
            The framework starts with paperwork. Not the most exciting opening,
            we know. But what if privacy paperwork could make your research
            better, not just legal? A Data Protection Impact Assessment (DPIA) —
            think of it as a privacy risk audit that maps out what could go
            wrong before you start collecting data — becomes your research
            companion, not your compliance burden. Usually these end up in a
            drawer somewhere, signed but never consulted again. We treat them as
            living documents that evolve with your research, helping you spot
            privacy landmines before you step on them.
            <br></br>
            <br></br>
            This isn't just about compliance (though yes, documented good faith
            beats scrambling for justifications). It's about forcing yourself to
            think through consequences before consequences force themselves on
            you. What data do you actually need? Who might be harmed? How will
            you protect them? In the sections that follow, we'll walk through
            the lessons we learnt — briefly, because nobody wants a 20,000-word
            blog post (that's what{" "}
            <CustomLink
              href="https://arxiv.org/abs/2508.09232"
              target="_blank"
              // rel="noopener noreferrer"
            >
              our paper
            </CustomLink>{" "}
            is for). We're leaving out Load stage (from PETLP) because honestly,
            it's just ‘store your data securely and don't route it through dodgy
            servers’ stretched over several pages. Let's start with extraction,
            where we discovered four different doors to the same data, each with
            its own legal logic and moral calculus.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "Four Doors, Four Realities",
      paragraph: (
        <>
          <Body>
            Think of Reddit's data like a building with four entrances: the
            front door (official API), the side door (user consent), the back
            door (third-party archives), and the window you open yourself
            (scraping). Each has different bouncers, different rules, and very
            different consequences if you're caught where you shouldn't be.
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
            <span style={{ fontWeight: "bold" }}>
              The Front Door (Official API):{" "}
            </span>
            Platform APIs and partnerships. Clean, documented, expensive,
            limited. Reddit gives you 100 queries per minute but caps history at
            six months. Perfect for studying last week's discourse, less helpful
            for longitudinal research. The safest door is also the smallest.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              The Side Door (User Consent):{" "}
            </span>
            Users donate their own data. Ethically pristine, practically
            fraught. Even with explicit consent, platforms can claim contract
            violations. NYU learned this the hard way. Plus, your sample will
            skew toward the technically sophisticated. Not ideal for
            generalisable research.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              The Back Door (Third-Party Archives):{" "}
            </span>
            Third-party aggregators and archived datasets. Someone else took the
            legal risk; you inherit the legal uncertainty. Those 15TB of Reddit
            data on Academic Torrents? They come with a note saying content “may
            be protected”. That's not a licence; it's a legal liability of
            unknown magnitude.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              The Window (DIY Scraping):{" "}
            </span>
            Scrape it yourself. If you're a qualifying research organisation,
            DSM Article 3 protects you. The LAION v. Kneschke court confirmed
            platforms can't contract away statutory research rights. If you're a
            commercial entity, you're probably violating terms of service. If
            you're a startup doing “research”, welcome to the grey zone.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      subheading: "The Impossibility of Anonymisation",
      paragraph: (
        <>
          <Body>
            Transform isn't just about cleaning messy data — it's where you
            discover that “anonymising” social media is like trying to make
            water not wet.
            <br></br>
            <br></br>
            Yes,{" "}
            <CustomLink
              href="https://ec.europa.eu/newsroom/article29/items/611236/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              true anonymisation of social media data proves difficult
            </CustomLink>
            . This isn't pessimism; De Montjoye's research showed that{" "}
            <CustomLink
              href="https://doi.org/10.1038/srep01376"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              95% of individuals can be uniquely identified from just four
              spatiotemporal points
            </CustomLink>
            . For social media, with its rich behavioural patterns and
            linguistic fingerprints, traditional de-identification techniques
            (stripping usernames, aggregating data, applying k-anonymity) amount
            to security theatre. They make re-identification slightly less
            convenient, not actually difficult.
            <br></br>
            <br></br>
            This reality demands a different approach. Differential privacy
            offers the mathematically defensible path forward. Yes, it adds
            noise, and yes, it reduces utility. But the tools have matured —{" "}
            <CustomLink
              href="https://opacus.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opacus
            </CustomLink>{" "}
            for PyTorch,{" "}
            <CustomLink
              href="https://www.tensorflow.org/responsible_ai/privacy/guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              TensorFlow Privacy{" "}
            </CustomLink>{" "}
            for TF - and
            <CustomLink
              href="https://openreview.net/forum?id=sKF3MOjfh2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              recent work demonstrates that 8B models can be fine-tuned with
              differential privacy
            </CustomLink>{" "}
            (though the performance trade-offs are still being mapped out). The
            trade-off is real but manageable. You're not choosing between
            perfect privacy and perfect utility; you're choosing between
            imperfect privacy and no privacy at all.
            <br></br>
            <br></br>
            What matters legally and ethically isn't achieving perfect
            anonymisation (impossible) but demonstrating serious engagement with
            privacy risks (possible). Document your differential privacy
            parameters. Justify your epsilon budget. Explain your noise addition
            strategy. Show that you understood the trade-offs and made
            deliberate choices to balance them. That paper trail — proving you
            engaged thoughtfully with privacy — becomes your defence when
            someone inevitably demonstrates that your “anonymised” dataset
            isn't.
          </Body>
        </>
      ),
      id: 7,
    },
    {
      justify: "flex-end",
      subheading: "The Publication Paradox",
      paragraph: (
        <>
          <Body>
            You've collected the data legally, transformed it carefully, stored
            it securely. But publishing your results might undo all that careful
            compliance. Because apparently, generating knowledge and sharing
            knowledge are two different crimes.
            <br></br>
            <br></br>
            <span style={{ fontStyle: "italic" }}>
              Legally collecting and processing data doesn't mean you can
              legally share your results.
            </span>
            <br></br>
            <br></br>
            The first problem is that models have memories. Your fine-tuned
            model — BERT, GPT, Claude, LLaMA, or whatever we're calling them by
            the time you read this — can recite training examples verbatim;
            that's the price of their intelligence. This means your model is
            carrying around fragments of personal data in its weights. Ask it
            the right question and it might repeat those personal details back.
            Under privacy law, that counts as 'processing personal data' — and
            you're responsible for it.{" "}
            <CustomLink
              href="https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              The EDPB explicitly warns that models trained on personal data
              can't always be considered anonymous
            </CustomLink>
            .<br></br>
            <br></br>
            However, we still do not know whether training models on those
            datasets is also free from copyrights. There’s a{" "}
            <CustomLink
              href="https://www.europarl.europa.eu/RegData/etudes/STUD/2025/774095/IUST_STU(2025)774095_EN.pdf"
              target="_blank"
              // rel="noopener noreferrer"
            >
              case pending
            </CustomLink>{" "}
            , and until such case provides clarity, publishing model weights
            exists in legal grey zone. Your model could be legitimate research
            output or massive copyright infringement. Nobody knows, and that
            uncertainty has a price tag attached.
          </Body>
        </>
      ),
      id: 8,
    },
    {
      justify: "flex-end",
      subheading: "Sometimes the Map Is All You Need",
      paragraph: (
        <>
          <Body>
            PETLP doesn't eliminate the structural tensions that make social
            media data simultaneously essential and restricted for AI research.
            Privacy and openness pull in opposite directions. Innovation bumps
            against compliance. Platform control tramples academic freedom.
            These aren't bugs in the system — they're features designed to
            protect different stakeholders with incompatible interests.
            <br></br>
            <br></br>
            But understanding these constraints changes how you work within
            them. PETLP provides structure for navigating unstructured
            territory: decision trees that clarify your extraction options,
            living DPIAs that evolve with your research, risk frameworks that
            anticipate problems before lawyers arrive. The point isn't perfect
            safety. The point is proving you made deliberate choices rather than
            stumbling blindly forward.
            <br></br>
            <br></br>
            We built this after our own research stalled mid-project, after
            watching Pushshift orphan hundreds of studies, after seeing too many
            researchers abandon social media work entirely. This framework is
            our refusal to let legal complexity kill AI research that depends on
            social media data.
            <br></br>
            <br></br>
            We've mapped the maze not because we found the exit — there isn't
            one, at least not yet. We've mapped it because research must
            continue, even when the walls keep moving. Sometimes a good map
            through bad territory is exactly what you need.
          </Body>
        </>
      ),
      id: 9,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <span style={{ fontStyle: "italic" }}>
              PETLP is available at{" "}
              <CustomLink
                href="https://www.arxiv.org/abs/2508.09232"
                target="_blank"
                // rel="noopener noreferrer"
              >
                arXiv
              </CustomLink>{" "}
              with decision trees, templates, and implementation guides. For
              Reddit researchers, we're rebuilding{" "}
              <CustomLink
                href="/data/redditharbor"
                // rel="noopener noreferrer"
              >
                RedditHarbor
              </CustomLink>{" "}
              from a simple crawler into guided PETLP compliance - automating
              not just data collection but the documentation and decisions that
              keep it defensible.
              <br></br>
              <br></br>
              Built with cautious optimism at socius: Experimental Intelligence
              Lab
            </span>
          </Body>
        </>
      ),
      id: 10,
    },
    {
      justify: "space-between",
      subheading: "sentibank",
      paragraph: "Sixty years of emotion dictionaries. One import statement.",
      paragraphButton: "View all",

      id: 11,
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Navigating the Legal Maze of Social Media AI Research | socius labs"
        </title>
        <meta
          name="title"
          content="Navigating the Legal Maze of Social Media AI Research | socius labs"
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
          content="Navigating the Legal Maze of Social Media AI Research | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={PELTPCover} />
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
            alt={`Diagram for Extraction Channels`}
            src={ExtractionChannelDiagram}
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
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 10)}
        />
      </CustomTextContainer>
    </>
  );
};

export default PETLP;
