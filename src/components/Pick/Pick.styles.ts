import styled, { css } from "styled-components";

type BorderPickProps = {
  colors: {
    BG: string;
    GR1: string;
    GR2: string;
  };
  isWinner?: boolean;
};

export const BorderPick = styled.div<BorderPickProps>`
  ${({ colors, isWinner }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background: ${colors.BG};
  background: ${`linear-gradient(193deg, ${colors.GR1} 0%, ${colors.GR2} 100%);`}
  border-radius: 50%;
  box-shadow: ${isWinner && "0 0 0 2rem rgba(221, 221, 221, 0.1)"},${
    isWinner && "0 0 0 4rem rgba(221, 221, 221, 0.05)"
  },${isWinner && "0 0 0 6rem rgba(221, 221, 221, 0.04)"};
  transition:.6s all ease
  `}
`;

export const Pick = styled.button`
  background: #dcdbdf;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  box-shadow: inset rgba(17, 17, 26, 0.1) 0px 4px 10px,
    rgba(17, 17, 26, 0.05) 0px 8px 20px;
`;
