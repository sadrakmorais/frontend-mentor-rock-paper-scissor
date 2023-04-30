import {
  ReactNode,
  ReactPortal,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IScoreContext {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ScoreContext = createContext<IScoreContext>({
  score: 0,
  setScore: () => {},
});

type ScoreContextProviderProps = {
  children: ReactNode;
};

export const ScoreContextProvider = ({
  children,
}: ScoreContextProviderProps) => {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("userScore");
      const parsedValue = JSON.parse(value!);
      setScore(parsedValue);
    }
  }, []);

  useEffect(() => {
    if (score > 0) {
      const totalScore = JSON.stringify(score);
      localStorage.setItem("userScore", totalScore);
    }
  }, [score]);
  const values = useMemo<IScoreContext>(
    () => ({
      score,
      setScore,
    }),
    [score, setScore]
  );

  return (
    <ScoreContext.Provider value={values}>{children}</ScoreContext.Provider>
  );
};
