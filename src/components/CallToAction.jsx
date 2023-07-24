import React from "react";
import styled from "styled-components";
import { H2, ParentContainer, SecondaryButton } from "../styles";

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
          <H2
            style={{
              color: callToAction.textColour,
            }}
          >
            {callToAction.heading}
            We’re always looking for new partners to collaborate with.
          </H2>
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
  padding: 24px 40vw 24px 24px;
  border-radius: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Heading = styled(H2)`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
