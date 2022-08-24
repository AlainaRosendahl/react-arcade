import React from "react";
import Game2048 from "../../assets/img/2048.png";

import "./HomeRight.css";

const Home2048 = () => {
  return (
    <div className="game-mid">
      <div className="game-container-mid">
        <div className="left-home">
          <div className="info-container">
            <h1>2048</h1>
            <p>
              2048 is a game with one objective. Get one of the tiles to add up to the number 2048 before all of the tiles are filled up. Every turn a new tile will be added with a number from 2 to 8. Can you get the new highscore?{" "}
            </p>
            <button type="button" class="btn btn-primary" onClick="">
              2048
            </button>
          </div>
          <div className="right-home">
            <div className="image-container">
              <img className="game-image" src={Game2048} alt="developer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2048;
