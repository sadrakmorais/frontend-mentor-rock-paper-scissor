import Image from "next/image";
import * as S from "./Pick.styles";
type PickProps = {
  pathImage: string;
  handleAction?: () => void;
  idPick: number;
  isWinner?: boolean;
};

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

export function Pick({ pathImage, idPick, handleAction, isWinner }: PickProps) {
  return (
    <S.BorderPick colors={colorGradient[idPick]} isWinner={isWinner}>
      <S.Pick onClick={handleAction}>
        <Image
          className="logo"
          src={pathImage}
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
      </S.Pick>
    </S.BorderPick>
  );
}
