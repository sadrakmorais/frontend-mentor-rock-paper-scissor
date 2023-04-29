import { useContext, useEffect, useState } from "react";
import * as S from "./Game.styles";
import { ScoreContext } from "@/contexts/score";
import { ChoicesButtons } from "../ChoicesButtons/ChoicesButtons";

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
      <ChoicesButtons
        changePicked={setChoosePlayer}
        changePickedHome={setChooseHome}
        changeWinner={setWinner}
      />
      {chooseHome && choosePlayer && (
        <>
          <div>
            <span>YOU PICKED</span>
            <h1>{choosePlayer}</h1>
          </div>
          <div>
            <span>THE HOUSE PICKED</span>
            <h1>{chooseHome}</h1>
          </div>
        </>
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
