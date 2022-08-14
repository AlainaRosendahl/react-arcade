import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, GameBoard } from './2048/components';
import { BEST_SCORE_KEY } from "./2048/constants";
import GlobalStyle from "./2048/styles/GlobalStyle";

function Noah() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
      localStorage.setItem(BEST_SCORE_KEY, score);
    }
  }, [score])

  return (
    <div className="App">
    <GlobalStyle />
    <Header score={score} bestScore={bestScore} reset={reset} setReset={setReset} />
    <Main>
      <GameBoard score={score} setScore={setScore} setBestScore={setBestScore} reset={reset} setReset={setReset}></GameBoard>
    </Main>
  </div >
   );
}

export default Noah;


const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;
