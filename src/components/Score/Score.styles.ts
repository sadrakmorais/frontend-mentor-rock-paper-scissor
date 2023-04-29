import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  max-width: 120px;
  background: #ddd;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Barlow Semi Condensed", sans-serif;
    color: hsl(229, 64%, 46%);
    font-weight: 600;
    font-size: 0.75rem;
  }
  h1 {
    color: hsl(229, 25%, 31%);
    font-size: 3rem;
    line-height: 2.5rem;
  }
`;
