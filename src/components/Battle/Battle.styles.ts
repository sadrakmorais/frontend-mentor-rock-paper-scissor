import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SlotPick = styled.div`
  width: 70px;
  height: 70px;
  min-width: 70px;
  border: 0;
  border-radius: 50%;
  padding: 0.8rem;
  background: red;
`;

type ResultProps = {
  isWinner: boolean;
};

export const Result = styled.div<ResultProps>`
  ${({ isWinner }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 2.5rem;
    }
    button {
      width: 100%;
      background: #ddd;
      border-radius: 0.5rem;
      padding: 1rem;
      color: ${isWinner ? "hsl(217, 16%, 45%)" : "hsl(349, 70%, 56%)"};
      font-weight: 700;
    }
  `}
`;
