import "./App.css";
import React from "react";
import SingleCard from "./components/SingleCard";
import { useState } from "react";

const cardImages = [
  { src: "/img/sad-cat.png", matched: false },
  { src: "/img/spongebob.png", matched: false },
  { src: "/img/spongebob2.png", matched: false },
  { src: "/img/what.png", matched: false },
  { src: "/img/wasnt-me.png", matched: false },
  { src: "/img/mike-wasowski.png", matched: false },
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
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default MemeMemory;
