import Image from "next/image";
import * as S from "./Battle.styles";
import { Pick } from "../Pick/Pick";
import { Choices } from "../Game/Game";
import { choices } from "../ChoicesButtons/ChoicesButtons";

type BattleProps = {
  pickPlayer: Choices;
  pickHome: Choices;
};

const getIdPick = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
export function Battle({ pickHome, pickPlayer }: BattleProps) {
  return (
    <S.Wrapper>
      {pickPlayer && (
        <Pick
          idPick={getIdPick[pickPlayer] - 1}
          pathImage={choices[getIdPick[pickPlayer] - 1].icon}
        />
      )}

      {pickHome ? (
        <Pick
          idPick={getIdPick[pickHome] - 1}
          pathImage={choices[getIdPick[pickHome] - 1].icon}
        />
      ) : (
        <S.SlotPick />
      )}
    </S.Wrapper>
  );
}
