import React from "react";
import sc from "styled-components";
import { useEffect, useState } from "react";

const ballSize = 20;
const GameWidth = 500;
const GameHeight = 500;
const ballDrop = 6;
const jumpHeight = 100;
const wallWidth = 40;
const wallGap = 200;

const INITIAL_BALL_POSITION = 450;
const INITIAL_START_GAME = false;
const INITIAL_WALL_HEIGHT = 100;
const INITIAL_WALL_LEFT = GameWidth - wallWidth;
const INITIAL_SCORE = 0;
const GAME_PADDING = 200;
const INITIAL_WALL_SPEED = 10;

const BouncyBall = () => {
  const [ballPosition, setBallPosition] = useState(INITIAL_BALL_POSITION);
  const [startGame, setStartGame] = useState(INITIAL_START_GAME);
  const [wallHeight, setWallHeight] = useState(INITIAL_WALL_HEIGHT);
  const [wallLeft, setWallLeft] = useState(INITIAL_WALL_LEFT);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [wallSpeed, setWallSpeed] = useState(INITIAL_WALL_SPEED);

  const bottomWallHeight = GameHeight - wallGap - wallHeight;

  useEffect(() => {
    let time;
    if (startGame && ballPosition < GameHeight + GAME_PADDING - ballSize) {
      time = setInterval(() => {
        setBallPosition((ballPosition) => ballPosition + ballDrop);
      }, 24);
    }

    return () => {
      clearInterval(time);
    };
  }, [ballPosition, startGame]);

  useEffect(() => {
    if (score <= 5) {
      setWallSpeed(10);
    } else if (score > 5 && score <= 10) {
      setWallSpeed(11);
    } else if (score > 10 && score <= 15) {
      setWallSpeed(12);
    } else if (score > 15 && score <= 20) {
      setWallSpeed(13);
    } else if (score > 20 && score <= 25) {
      setWallSpeed(14);
    } else if (score > 25 && score <= 30) {
      setWallSpeed(15);
    }
  }, [wallSpeed, score]);

  useEffect(
    () => {
      let wall;

      if (startGame && wallLeft >= -wallWidth) {
        wall = setInterval(() => {
          setWallLeft((wallLeft) => wallLeft - wallSpeed);
        }, 24);

        return () => {
          clearInterval(wall);
        };
      } else if (startGame) {
        setWallLeft(GameWidth - wallWidth);
        setWallHeight(Math.floor(Math.random() * (GameHeight - wallGap)));
        setScore(score + 1);
      }
    },
    [startGame, wallLeft, score, wallHeight, wallSpeed],
    24
  );

  useEffect(() => {
    const hasHitTopWall =
      ballPosition >= GAME_PADDING && ballPosition < wallHeight + GAME_PADDING;
    const hasHitBottomWall =
      ballPosition <= GameHeight + GAME_PADDING &&
      ballPosition >= GameHeight + GAME_PADDING - bottomWallHeight;

    if (
      wallLeft >= 20 &&
      wallLeft <= wallWidth &&
      (hasHitTopWall || hasHitBottomWall)
    ) {
      // reset the game
      setBallPosition(INITIAL_BALL_POSITION);
      setStartGame(INITIAL_START_GAME);
      setWallHeight(INITIAL_WALL_HEIGHT);
      setWallLeft(INITIAL_WALL_LEFT);
      setScore(INITIAL_SCORE);
    }
  }, [ballPosition, wallHeight, bottomWallHeight, wallLeft]);

  const handleClick = () => {
    let newBallPosition = ballPosition - jumpHeight;
    if (!startGame) {
      setStartGame(true);
    } else if (newBallPosition < GAME_PADDING) {
      setBallPosition(GAME_PADDING);
    } else {
      setBallPosition(newBallPosition);
    }
  };

  return (
    <div>
      <H1>Bouncy Ball</H1>
      <GameContainer>
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
      </GameContainer>
    </div>
  );
};

export default BouncyBall;

const Ball = sc.div`
    margin-left: 10px;
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

const GameContainer = sc.div`
    display: flex;
    width: 100%;
    padding-top: 50px;
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
const H1 = sc.div`
    display: flex;
    justify-content: center;
    padding-top: 75px;
    font-size: 4rem;
`;
