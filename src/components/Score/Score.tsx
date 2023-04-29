import { useContext } from "react";
import * as S from "./Score.styles";
import { ScoreContext } from "@/contexts/score";

export function Score() {
  const { score } = useContext(ScoreContext);

  return (
    <S.Wrapper>
      <span>SCORE</span>
      <h1>{score}</h1>
    </S.Wrapper>
  );
}
