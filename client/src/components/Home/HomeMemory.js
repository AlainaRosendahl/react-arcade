import React from "react";
import memory from "../../assets/img/Memory2.png";

import "./homeLeft.css";

const HomeMemory = () => {
  return (
    <div className="game">
      <div className="game-container">
        <div className="left-home">
          <div className="image-container">
            <img className="game-image" src={memory} alt="developer" />
          </div>
        </div>
        <div className="right-home">
          <div className="info-container">
            <h1>Meme Memory</h1>
            <p>
            Meme Match! A simple game that matchs meme's with the click of a button. Built using react, this app has improved my development skills 
              using mapping and useState.{" "}
            </p>
            <button type="button" className="btn btn-primary" onClick="">
              Meme Memory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMemory;
