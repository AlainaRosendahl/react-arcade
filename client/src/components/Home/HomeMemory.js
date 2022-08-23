import React from "react";
import memory from "../../assets/img/memory.png";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit{" "}
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
