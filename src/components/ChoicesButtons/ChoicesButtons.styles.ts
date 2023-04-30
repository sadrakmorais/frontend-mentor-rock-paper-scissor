import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  background-image: url("/images/bg-triangle.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  gap: 1rem;
  section {
    display: flex;
    width: 100%;
    justify-content: center;

    &.section-1 {
      justify-content: space-between;
      position: relative;
      top: -40px;
    }
  }
`;
