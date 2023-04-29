import { useContext, useEffect, useState } from "react";
import * as S from "./Game.styles";
import { ScoreContext } from "@/contexts/score";
import { ChoicesButtons } from "../ChoicesButtons/ChoicesButtons";
import { Battle } from "../Battle/Battle";

export type Choices = "paper" | "rock" | "scissors" | null;
export function Game() {
  const [choosePlayer, setChoosePlayer] = useState<Choices>(null);
  const [chooseHome, setChooseHome] = useState<Choices>(null);
  const [winner, setWinner] = useState(0);
  const { score, setScore } = useContext(ScoreContext);

  const responseWinner: { [key: number]: string } = {
    1: "YOU WIN",
    2: "YOU LOSE",
    3: "DRAW",
  };

  const handleTryAgain = () => {
    setChooseHome(null);
    setChoosePlayer(null);
    setWinner(0);
  };

  useEffect(() => {
    if (winner === 1) setScore(score + 1);
  }, [winner]);

  return (
    <S.Wrapper>
      {!choosePlayer && (
        <ChoicesButtons
          changePicked={setChoosePlayer}
          changePickedHome={setChooseHome}
          changeWinner={setWinner}
        />
      )}
      {(chooseHome || choosePlayer) && (
        <Battle pickPlayer={choosePlayer} pickHome={chooseHome} />
      )}

      {!!winner && (
        <>
          <div>{responseWinner[winner]}</div>
          <button onClick={() => handleTryAgain()}>TRY AGAIN</button>
        </>
      )}
    </S.Wrapper>
  );
}
