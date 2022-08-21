import "./App.css";
import React from "react";
import SingleCard from "./components/SingleCard";
import { useState } from "react";

const cardImages = [
  { src: "../../assets/img/sad-cat.png" },
  { src: "../../assets/img/spongebob.png" },
  { src: "../../assets/img/spongebob2.png" },
  { src: "../../assets/img/what.png" },
  { src: "../../assets/img/wasnt-me.png" },
  { src: "../../assets/img/mike-wasowski.png" },
];

const MemeMemory = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Meme Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card.src} />
        ))}
      </div>
    </div>
  );
};

export default MemeMemory;
