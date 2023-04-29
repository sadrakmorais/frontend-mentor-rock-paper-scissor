import {
  ReactNode,
  ReactPortal,
  createContext,
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
