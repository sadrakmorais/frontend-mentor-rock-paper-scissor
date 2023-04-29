import Image from "next/image";
import * as S from "./ChoicesButtons.styles";
import { Choices } from "../Game/Game";

type ChoicesProps = {
  id: number;
  icon: string;
  name: Choices;
};

const choices: ChoicesProps[] = [
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

const colorGradient = [
  {
    BG: "rgb(220,46,78)",
    GR1: "rgba(220,46,78,1)",
    GR2: "rgba(221,64,93,1)",
  },
  {
    BG: "rgb(72,101,244)",
    GR1: "rgba(72,101,244,1)",
    GR2: "rgba(86,113,245,1)",
  },
  {
    BG: "rgb(236,158,14)",
    GR1: "rgba(236,158,14,1)",
    GR2: "rgba(236,169,34,1)",
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
      }, 200);
    }, 1000);
  };
  return (
    <S.Wrapper>
      {choices.map((choice) => (
        <S.BordePick key={choice.id} colors={colorGradient[choice.id - 1]}>
          <S.Pick
            onClick={() => {
              changePicked(choice.name);
              handlePlay(choice.name);
            }}
          >
            <Image
              className="logo"
              src={choice.icon}
              alt="Next.js Logo"
              width={50}
              height={50}
              priority
            />
          </S.Pick>
        </S.BordePick>
      ))}
    </S.Wrapper>
  );
}
