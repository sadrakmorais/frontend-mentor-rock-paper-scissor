import { useEffect, useState } from "react";
import * as S from "./Game.styles";

type Choices = "paper" | "rock" | "scissor" | null;
export function Game() {
  const [choosePlayer, setChoosePlayer] = useState<Choices>(null);
  const [chooseHome, setChooseHome] = useState<Choices>(null);
  const [score, setScore] = useState(0);

  function randomChoice() {
    const choices: Choices[] = ["paper", "scissor", "rock"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
  }

  useEffect(() => {
    if (choosePlayer !== null) setChooseHome(randomChoice());
  }, [choosePlayer]);
  return (
    <S.Wrapper>
      <button onClick={() => setChoosePlayer("rock")}>pedra</button>
      <button onClick={() => setChoosePlayer("paper")}>papel</button>
      <button onClick={() => setChoosePlayer("scissor")}>tesoura</button>
    </S.Wrapper>
  );
}
