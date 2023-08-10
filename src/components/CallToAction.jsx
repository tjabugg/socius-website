import React from "react";
import styled from "styled-components";
import { Subheading, ParentContainer, SecondaryButton, Body } from "../styles";

// Destructure blogs and title directly from the props
const CallToActions = ({ callToActions }) => {
  return (
    <div>
      {callToActions.map((callToAction) => (
        <Container
          key={callToAction.id}
          style={{
            backgroundColor: callToAction.bgColour,
          }}
        >
          <Subheading
            style={{
              color: callToAction.textColour,
            }}
          >
            {callToAction.heading}
            We're ready to combine our capabilities with your expertise.
          </Subheading>
          <Caption
            style={{
              color: callToAction.textColour,
            }}
          >
            As an emerging lab, there is still so much to learn about
            integrating AI with social science: but realising this vision
            requires partnership - we can't transform the landscape alone. We
            invite researchers across disciplines and sectors to collaborate
            with us.
          </Caption>
          <SecondaryButton href="mailto:nick.sh.oh@gmail.com" target="_blank">
            {callToAction.button}Get in touch
          </SecondaryButton>
        </Container>
      ))}
    </div>
  );
};

export default CallToActions;

export const Container = styled(ParentContainer)`
  padding: 24px;
  border-radius: 20px;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Caption = styled(Body)`
  width: 60%;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
