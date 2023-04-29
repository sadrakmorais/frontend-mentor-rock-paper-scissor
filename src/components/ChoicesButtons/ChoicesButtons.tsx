import Image from "next/image";
import * as S from "./ChoicesButtons.styles";
import { Choices } from "../Game/Game";
import { Pick } from "../Pick/Pick";

type ChoicesProps = {
  id: number;
  icon: string;
  name: Choices;
};

export const choices: ChoicesProps[] = [
  {
    id: 1,
    icon: "/images/icon-rock.svg",
    name: "rock",
  },
  {
    id: 2,
    icon: "/images/icon-paper.svg",
    name: "paper",
  },
  {
    id: 3,
    icon: "/images/icon-scissors.svg",
    name: "scissors",
  },
];

type ChoicesButonsProps = {
  changePicked: React.Dispatch<React.SetStateAction<Choices>>;
  changePickedHome: React.Dispatch<React.SetStateAction<Choices>>;
  changeWinner: React.Dispatch<React.SetStateAction<number>>;
};

export function ChoicesButtons({
  changePicked,
  changePickedHome,
  changeWinner,
}: ChoicesButonsProps) {
  function randomChoice() {
    const choices: Choices[] = ["paper", "scissors", "rock"];

    const randomNumber = Math.floor(Math.random() * 3);
    changePickedHome(choices[randomNumber]);
    return choices[randomNumber];
  }

  const verifyWinner = (player: Choices, home: Choices) => {
    if (player === null || home === null) return;
    const pickeds: { [key: string]: number } = {
      rockscissors: 1,
      paperrock: 1,
      scissorspaper: 1,
      scissorsrock: 2,
      rockpaper: 2,
      paperscissors: 2,
    };

    const key = player + home;
    changeWinner(pickeds[key] || 3);
  };

  const handlePlay = (choice: Choices) => {
    changePicked(choice);
    setTimeout(() => {
      const homePick = randomChoice();
      setTimeout(() => {
        verifyWinner(choice, homePick);
      }, 800);
    }, 1000);
  };
  return (
    <S.Wrapper>
      {choices.map((choice) => (
        <Pick
          key={choice.id}
          idPick={choice.id - 1}
          pathImage={choice.icon}
          handleAction={() => {
            changePicked(choice.name);
            handlePlay(choice.name);
          }}
        />
      ))}
    </S.Wrapper>
  );
}
