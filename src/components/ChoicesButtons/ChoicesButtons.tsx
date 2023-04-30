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
      <section className="section-1">
        <Pick
          key={choices[0].id}
          idPick={choices[0].id - 1}
          pathImage={choices[0].icon}
          handleAction={() => {
            changePicked(choices[0].name);
            handlePlay(choices[0].name);
          }}
        />
        <Pick
          key={choices[1].id}
          idPick={choices[1].id - 1}
          pathImage={choices[1].icon}
          handleAction={() => {
            changePicked(choices[1].name);
            handlePlay(choices[1].name);
          }}
        />
      </section>
      <section>
        <Pick
          key={choices[2].id}
          idPick={choices[2].id - 1}
          pathImage={choices[2].icon}
          handleAction={() => {
            changePicked(choices[2].name);
            handlePlay(choices[2].name);
          }}
        />
      </section>
    </S.Wrapper>
  );
}
