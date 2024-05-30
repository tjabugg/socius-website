import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const MyCoolCodeBlock = ({ showLineNumbers }) => {
  return (
    <TextContainer>
      {showLineNumbers.map((showLineNumber) => (
        <BodyContainer>
          <CopyBlock
            language={"python"}
            text={showLineNumber.code}
            // showLineNumbers={lineNumbers}
            theme={dracula}
            // wrapLines={true}
            codeBlock
          />
        </BodyContainer>
      ))}
    </TextContainer>
  );
};

export default MyCoolCodeBlock;

export const TextContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: center;
  /* margin: 0px 10vw 0px 10vw; */
  margin: 24px auto 24px auto;
  /* gap: 80px; */
  /* align-items: center; */
  /* width: 100%; */

  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const BodyContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  /* flex: 0.35; */
  /* gap: 20px; */
  /* margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  } */
`;
