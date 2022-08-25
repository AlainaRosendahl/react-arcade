import React from "react";
import BouncyBall from "../../assets/img/bb.png";

import "./homeLeft.css";

const BBall = () => {
  return (
    <div className="game">
      <div className="game-container">
        <div className="left-home">
          <div className="image-container">
            <img className="game-image" src={BouncyBall} alt="developer" />
          </div>
        </div>
        <div className="right-home">
          <div className="info-container">
            <h1>Bouncy Ball</h1>
            <p>
              Bouncy Ball is a game that is modeled from flappy bird and was
              developed by Bryan Wilkerson. All you have to do is click on the
              game and every thing will start running. If you don't click the
              ball will drop and you click for it to go back up. Your goal is to
              bounce the ball threw the gap in the wall without hitting a wall.
              If you do that your score will go up. Try it out and see what your
              high score will be.
{" "}
            </p>
            <button type="button" class="btn btn-primary" onClick="">
              Bouncy Ball
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBall;
