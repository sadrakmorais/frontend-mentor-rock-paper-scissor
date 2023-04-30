import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
