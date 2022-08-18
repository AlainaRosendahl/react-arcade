import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, GameBoard } from './2048/components';
import { BEST_SCORE_KEY } from "./2048/constants";
import GlobalStyle from "./2048/styles/GlobalStyle";
// import Home from "../Alaina";
// import Alaina from "../Home";
// import Bryan from "../Bryan";
// import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../components/Nav/NavStyles.css";
// import Navbar from "../../components/Nav/Nav";

function Noah() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
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
    <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Noah">Noah</Link>
        </li>
        <li>
          <Link to="/Alaina">Alaina</Link>
        </li>
        <li>
          <Link to="/Bryan">Bryan</Link>
        </li>
     </ul>
    <Main>
      <GameBoard score={score} setScore={setScore} setBestScore={setBestScore} reset={reset} setReset={setReset}></GameBoard>
    </Main>
    <SubText>
                <Button onClick={() => setReset(reset => !reset)}>Start Over</Button>
     </SubText>
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
const SubText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    margin: 1rem;
    padding: 1rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    background-color: #4d539485;
    color: Orange;
    border: 1px solid white;
    &:hover{
        background-color: #2f335d;
    }
`;