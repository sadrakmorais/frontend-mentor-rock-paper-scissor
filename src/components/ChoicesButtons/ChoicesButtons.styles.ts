import styled, { css } from "styled-components";

type BordePickProps = {
  colors: {
    BG: string;
    GR1: string;
    GR2: string;
  };
};
export const Wrapper = styled.div`
  display: flex;
`;

export const BordePick = styled.div<BordePickProps>`
  ${({ colors }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background: ${colors.BG};
  background: ${`linear-gradient(193deg, ${colors.GR1} 0%, ${colors.GR2} 100%);`}
  border-radius: 50%;
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
