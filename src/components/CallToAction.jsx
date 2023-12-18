import React from "react";
import styled from "styled-components";
import { Subheading, ParentContainer, SecondaryButton } from "../styles";

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
          <Title
            style={{
              color: callToAction.textColour,
            }}
          >
            {callToAction.heading}
          </Title>
          <SecondaryButton href="mailto:nick.sh.oh@gmail.com" target="_blank">
            {callToAction.button}
          </SecondaryButton>
        </Container>
      ))}
    </div>
  );
};

export default CallToActions;

export const Container = styled(ParentContainer)`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 20px;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const Title = styled(Subheading)`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
