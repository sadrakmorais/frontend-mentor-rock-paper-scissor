import Image from "next/image";
import * as S from "./Header.styles";
import { Score } from "../Score/Score";

export function Header() {
  return (
    <S.Wrapper>
      <Image
        className="logo"
        src="/images/logo.svg"
        alt="Next.js Logo"
        width={180}
        height={90}
        priority
      />
      <Score />
    </S.Wrapper>
  );
}
