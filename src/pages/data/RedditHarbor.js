import { useState } from "react";
import TextBlocks from "../../components/TextBlocks";
import PublicationHero from "../../components/PublicationHero";
import { Helmet } from "react-helmet";
import DatabaseDriven from "../../assets/images/databaseDriven_graphic.jpg";
import MountainValley from "../../assets/images/mountain_valley.jpg";
import Aristocrats from "../../assets/images/aristocrats.jpg";
import RedditHarborCover from "../../assets/covers/reddit_harbor_cover.png";
import Github from "../../assets/images/github-mark.svg";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Body,
  CustomLink,
  CustomCode,
  CustomTextContainer,
  CustomContainer,
  H5,
  NumList,
  CustomHeadingLink,
} from "../../styles";
import ArticleCard from "../../components/ArticleCard";
import styled from "styled-components";

const RedditHarbor = () => {
  const [publicationHeroes] = useState([
    {
      tagOne: "In Development",
      tagTwo: "v0.1.0 Released",
      heading: "RedditHarbor",
      image: RedditHarborCover,
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      gitLink: "https://github.com/socius-org/RedditHarbor",
      github: Github,
      justify: "flex-end",
      share: "Share",
      subheading: (
        <>
          <H5>
            <CustomHeadingLink
              href="https://www.reddit.com/r/modnews/comments/134tjpe/reddit_data_api_update_changes_to_pushshift_access/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pushshift died
            </CustomHeadingLink>
            . Academic Torrents hosts data we can't legally touch. Reddit's API
            is free but makes you build everything from scratch. Every Reddit
            researcher knows this dance: request API access, set up PRAW, write
            collection scripts, debug at 3am, discover your CSV schema was wrong
            three weeks in, rebuild. Again. We realised every Reddit researcher
            was independently reinventing the same broken wheel. So we built
            RedditHarbor — one working wheel for everyone. Ten minutes from
            install to collecting data. No engineering degree required. No 3am
            debugging sessions. Just boring infrastructure that actually works.
          </H5>
        </>
      ),
      id: 1,
    },
    {
      justify: "flex-end",
      subheading: "The Day the Music Died (May 2023)",
      paragraph: (
        <>
          <Body>
            When Pushshift died in 2023, Reddit research got much harder
            overnight. Pushshift had quietly handled all the infrastructure work
            — parsing JSON, enabling bulk downloads, making temporal queries
            actually work. Researchers took it for granted until it was gone.
            <br></br>
            <br></br>
            Now researchers face three options:
            <NumList>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  Official API with DIY Infrastructure:{" "}
                </span>
                Reddit offers a free API, and{" "}
                <CustomLink
                  href="https://praw.readthedocs.io/en/stable/"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  PRAW
                </CustomLink>{" "}
                makes it accessible. But you still need to build everything
                else. Three weeks later, you might have a working pipeline.
                Three weeks of engineering that had nothing to do with your
                actual research.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Academic Torrents: </span>
                Someone, somewhere, scraped years of Reddit data and uploaded
                it. It's sitting there, terabytes of exactly what you need. But
                it disclaims the data ‘may be copyright protected’. The legal
                equivalent of 'maybe safe, maybe not’.
              </li>
            </NumList>
            <br></br>
            We built RedditHarbor to be option three: legal, practical, and
            boring in all the right ways.
          </Body>
        </>
      ),
      id: 2,
    },
    {
      justify: "flex-end",
      subheading: "Ten Minutes from Zero to Pipeline",
      paragraph: (
        <>
          <Body>
            Here's what setup looks like. Takes about ten minutes. We timed it.
            Including the time to make coffee while Supabase spins up.
            <br></br>
            <br></br>
            First, request Reddit API credentials at the{" "}
            <CustomLink
              href="https://support.reddithelp.com/hc/en-us/requests/new?ticket_form_id=14868593862164"
              target="_blank"
              // rel="noopener noreferrer"
            >
              Reddit support center
            </CustomLink>{" "}
            (2 minutes of form-filling). They approve academic requests quickly.{" "}
            <br></br>
            <br></br>
            Then spin up a free Supabase project at{" "}
            <CustomLink
              href="https://supabase.com/"
              target="_blank"
              // rel="noopener noreferrer"
            >
              supabase.com
            </CustomLink>
            .<br></br>
            <br></br>
            Finally, install RedditHarbor and connect everything (8 minutes
            including database setup).
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
            That's it. Your data flows into three clean tables. And you can
            later download it with{" "}
            <CustomCode>redditharbor.utils.download</CustomCode> however you
            want — CSV for the Excel holdouts, JSON for the web folks, even the
            actual images if you're doing multimodal work. We don't judge.
          </Body>
        </>
      ),
      id: 4,
    },
    {
      justify: "flex-end",
      subheading: "The Boring Infrastructure Under the Hood",
      paragraph: (
        <>
          <Body>
            We spent few months making RedditHarbor boring. This is a
            compliment.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              Three Collection Strategies, All Legal:{" "}
            </span>
            Subreddit-based for community studies — grab hot, top, new,
            controversial posts. Keyword search with actual boolean operators
            that work ("renewable energy NOT (fossil OR coal)" does what you'd
            expect). Database-driven expansion — found interesting posts? Fetch
            their comments. Discovered relevant users? Track their posting
            history. It's breadth-first search for social media.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              Export Without Drama:
            </span>{" "}
            <CustomCode>download.submission().to_csv()</CustomCode> for
            spreadsheet people. <CustomCode>.to_json()</CustomCode> for API
            folks. <CustomCode>.to_img()</CustomCode> when you realise half of
            Reddit is actually memes and screenshots. Pick your columns, set
            your path, get your data. No proprietary formats. No vendor lock-in.
            Just your data in whatever shape you need it.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>
              Built-in PII Protection:{" "}
            </span>{" "}
            Microsoft's Presidio under the hood. One flag —{" "}
            <CustomCode>mask_pii=True</CustomCode> — and suddenly{" "}
            <CustomCode>John from Seattle</CustomCode> becomes{" "}
            <CustomCode>
              {"<PERSON>"} from {"<LOCATION>"}
            </CustomCode>
            . Covers 12+ entity types. Your IRB will sleep better. Though
            sometimes it's overeager: "The Fed raised rates by 0.25%" becomes
            "The Fed raised rates by {"<NUMBER>%"}". Privacy has trade-offs.
            <br></br>
            <br></br>
            <span style={{ fontWeight: "bold" }}>Temporal Tracking: </span>
            Everyone else gives you snapshots — a post frozen at some random
            Tuesday at 3:47 PM. RedditHarbor tracks evolution. Set{" "}
            <CustomCode>
              update.schedule_task("submission", "24hr")
            </CustomCode>{" "}
            and watch it unfold. Upvote ratios collapsing as brigade arrives.
            Comment counts exploding during controversies. Score trajectories
            that reveal community dynamics. The scheduler auto-adjusts based on
            your data volume — updates every 10 minutes for small datasets,
            daily for massive ones. All within Reddit's 100 QPM limit.
            <br></br>
            <br></br>
            This is infrastructure. Boring, reliable infrastructure that every
            Reddit researcher needs but nobody should have to build. We built it
            once, properly, so you can focus on finding insights instead of
            finding bugs.
          </Body>
        </>
      ),
      id: 5,
    },
    {
      justify: "flex-end",
      subheading: "What Comes Next: PETLP-Powered Compliance (v2.0)",
      paragraph: (
        <>
          <Body>
            Version 1 solved the technical problem. Version 2 solves the legal
            nightmare.
            <br></br>
            <br></br>
            <CustomLink
              href="/data/peltp"
              target=""
              // rel="noopener noreferrer"
            >
              We learned that collecting Reddit data legally requires navigating
              a maze of overlapping and contradictory requirement.
            </CustomLink>{" "}
            GDPR says one thing. Reddit's ToS says another. Copyright law wants
            something else entirely.
            <br></br>
            <br></br>
            So we're building{" "}
            <CustomLink
              href="https://www.arxiv.org/abs/2508.09232"
              target="blank"
              // rel="noopener noreferrer"
            >
              PELTP
            </CustomLink>{" "}
            directly into RedditHarbor. Answer simple questions about your
            research. Get bulletproof documentation. Keep redditors, IRBs, and
            lawyers happy. Compliance without the law degree.
          </Body>
        </>
      ),
      id: 6,
    },
    {
      justify: "flex-end",
      paragraph:
        "But for now, version 1 still works fine. It's ready. It's free. It's boring in all the right ways.",
      id: 7,
    },
    {
      justify: "flex-end",
      paragraph: (
        <>
          <Body>
            <span style={{ fontStyle: "italic" }}>
              RedditHarbor v0.1 is available now at{" "}
              <CustomLink
                href="https://github.com/socius-org/RedditHarbor"
                target="_blank"
                // rel="noopener noreferrer"
              >
                github.com/socius-org/RedditHarbor{" "}
              </CustomLink>{" "}
              . Version 2.0 is in development, built on lessons from our{" "}
              <CustomLink
                href="https://arxiv.org/abs/2508.09232"
                target="_blank"
                // rel="noopener noreferrer"
              >
                PETLP framework
              </CustomLink>
              . <br></br>
              <br></br>
              Built with respect for boring infrastructure at socius:
              Experimental Intelligence Lab
            </span>
          </Body>
        </>
      ),
      id: 8,
    },
    {
      justify: "space-between",
      subheading: "RedditHarbor",
      paragraph: "Reddit scraping with compliance built-in, not bolted on.",
      paragraphButton: "View all",
      link: "https://socius-org.github.io/RedditHarbor/about.html",
      target: "blank",
      id: 9,
    },
  ]);

  const codeString = `
pip install RedditHarbor

import redditharbor.login as login
from redditharbor.dock.pipeline import collect

# One-time authentication setup
reddit_client = login.reddit(
    public_key="<your-reddit-public>",
    secret_key="<your-reddit-secret>",
    user_agent="YourUni:ProjectName (u/username)"
)
supabase_client = login.supabase(
    url="<your-supabase-url>",
    private_key="<your-service-role-key>"  # Not the anon key!
)

# Name your tables (we keep it simple)
db_config = {
    "user": "redditors",
    "submission": "submissions",
    "comment": "comments"
}

# Initialize collector
collect = collect(reddit_client, supabase_client, db_config)

# Start collecting
collect.subreddit_submission(["python", "MachineLearning"], ["hot", "top"], limit=100)
`;

  const [articleCards] = useState([
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: MountainValley,
      padding: "0px",
      heading: "Subreddit data collection",
      paragraph:
        "Collect data from specific subreddits, whether you’re interested in submissions, comments or user information",
      tagOneBgColour: "#191F8C",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Subreddit",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "A painting of an Alpine Valley, with the Matterhorn in the Distance, by John Ruskin",
      id: 1,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/subreddit_based.html",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Aristocrats,
      padding: "0px",
      heading: "Keyword based data collection",
      paragraph:
        "Collect submissions based on specific keywords from your desired subreddits",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Keyword",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of Regents and Regentesses of the Lepers' Asylum",
      id: 2,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/keyword_based.html",
      target: "blank",
    },
    {
      aspectRatio: "1/1",
      flexDirection: "column",
      image: DatabaseDriven,
      padding: "0px",
      heading: "Database-driven data collection",
      paragraph:
        "Leverage your existing database to collect additional relevant data, such as comments from specific submissions",
      tagOneBgColour: "#3C46FF",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Database",
      tagTwoBgColour: "#8FB2FF",
      tagTwoColour: "#292726",
      alt: "Cropped close up of green arc on a pale blue background",
      id: 3,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/database_driven.html",
      target: "blank",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Navigating the Legal Maze of Social Media AI Research | socius labs
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
        <meta property="og:image" content={RedditHarborCover} />
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
        <CodeContainer>
          <CodeInner>
            <StyledSyntaxHighlighter
              language="python"
              style={dracula}
              // showLineNumbers
              wrapLines
            >
              {codeString}
            </StyledSyntaxHighlighter>
          </CodeInner>
        </CodeContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
        />
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 6)}
        />
        <Container>
          <WebContainer
            src="/redditharborAppPaper.html"
            alt="An interactive Demonstration of the socius RedditHarbor application"
            title="Interactive Mockup"
          />{" "}
        </Container>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 10)}
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
            [1, 2, 3].includes(card.id)
          )}
          grid="1fr 1fr 1fr 1fr"
        />
      </CustomContainer>
    </>
  );
};

export default RedditHarbor;

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
  margin: 0px !important;
  font-size: 0.9rem;
  background: #0d1117 !important;
  line-height: 1.5;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
  white-space: pre-wrap !important;
  word-break: break-word;
`;

export const WebContainer = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 880px;
  /* optional: ensures some initial height */
  border: 0;
  display: block;
  border-radius: 20px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* aspect-ratio: 16/9; */
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1681px) {
    /* aspect-ratio: 16/9; */
  }

  @media (max-width: 768px) {
    max-height: 640px;
  }

  @media (max-width: 414px) {
    /* aspect-ratio: 9/16; */
  }
`;
