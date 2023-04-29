import Image from "next/image";
import * as S from "./Battle.styles";
import { Pick } from "../Pick/Pick";
import { Choices } from "../Game/Game";
import { choices } from "../ChoicesButtons/ChoicesButtons";

type BattleProps = {
  pickPlayer: Choices;
  pickHome: Choices;
  winner: number;
  winnerMessage: string;
  handleTryAgain: () => void;
};

const getIdPick = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
export function Battle({
  pickHome,
  pickPlayer,
  handleTryAgain,
  winnerMessage,
  winner,
}: BattleProps) {
  return (
    <S.Wrapper>
      {pickPlayer && (
        <Pick
          isWinner={winner === 1}
          idPick={getIdPick[pickPlayer] - 1}
          pathImage={choices[getIdPick[pickPlayer] - 1].icon}
        />
      )}

      {!!winner && (
        <S.Result isWinner={winner === 1}>
          <span>{winnerMessage}</span>
          <button onClick={handleTryAgain}>TRY AGAIN</button>
        </S.Result>
      )}

      {pickHome ? (
        <Pick
          idPick={getIdPick[pickHome] - 1}
          pathImage={choices[getIdPick[pickHome] - 1].icon}
          isWinner={winner === 2}
        />
      ) : (
        <S.SlotPick />
      )}
    </S.Wrapper>
  );
}
