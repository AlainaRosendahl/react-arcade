import React from "react";
import "./bb.css";
import sc from "styled-components";
import { useEffect, useState } from "react";

const ballSize = 20;
const GameWidth = 500;
const GameHeight = 500;
const ballDrop = 6;
const jumpHeight = 100;
const wallWidth = 40;
const wallGap = 200;

const BouncyBall = () => {
  const [ballPosition, setBallPosition] = useState(250);
  const [startGame, setStartGame] = useState(false);
  const [wallHeight, setWallHeight] = useState(100);
  const [wallLeft, setWallLeft] = useState(GameWidth - wallWidth);
  const [score, setScore] = useState(0);

  const bottomWallHeight = GameHeight - wallGap - wallHeight;

  useEffect(() => {
    let timeId;
    if (startGame && ballPosition < GameHeight - ballSize) {
      timeId = setInterval(() => {
        setBallPosition((ballPosition) => ballPosition + ballDrop);
      }, 24);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [ballPosition, startGame]);

  useEffect(() => {
    let wallId;
    if (startGame && wallLeft >= -wallWidth) {
      wallId = setInterval(() => {
        setWallLeft((wallLeft) => wallLeft - 5);
      }, 24);

      return () => {
        clearInterval(wallId);
      };
    } else {
      setWallLeft(GameWidth - wallHeight);
      setWallHeight(Math.floor(Math.random() * (GameHeight - wallGap)));
      setScore(score + 1);
    }
  }, [startGame, wallLeft, score, wallHeight]);

  useEffect(() => {
    const hasHitTopWall = ballPosition >= 0 && ballPosition < wallHeight;
    const hasHitBottomWall =
      ballPosition <= 500 && ballPosition >= 500 - bottomWallHeight;

    if (
      wallLeft >= 0 &&
      wallLeft <= wallWidth &&
      (hasHitTopWall || hasHitBottomWall)
    ) {
      setStartGame(false);
    }
  }, [ballPosition, wallHeight, bottomWallHeight, wallLeft]);

  const handleClick = () => {
    let newBallPosition = ballPosition - jumpHeight;
    if (!startGame) {
      setStartGame(true);
    } else if (newBallPosition < 0) {
      newBallPosition(0);
    } else {
      setBallPosition(newBallPosition);
    }
    setBallPosition(newBallPosition);
  };

  return (
    <Div>
      <Game onClick={handleClick} height={GameHeight} width={GameWidth}>
        <Wall top={0} width={wallWidth} height={wallHeight} left={wallLeft} />
        <Wall
          top={GameHeight - (wallHeight + bottomWallHeight)}
          width={wallWidth}
          height={bottomWallHeight}
          left={wallLeft}
        />
        <Ball size={ballSize} top={ballPosition} />
      </Game>
      <span> {score} </span>
    </Div>
  );
};

export default BouncyBall;

const Ball = sc.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

const Div = sc.div`
    display: flex;
    width: 100%;
    justify-content: center;
    & span {
       color: white;
       font-size: 1.2rem;
       position: absolute; 
    }
`;

const Game = sc.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
    overflow: hidden;
`;

const Wall = sc.div`
    position: relative;
    top: ${(props) => props.top}px;
    background-color: green;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: ${(props) => props.left}px;
`;
