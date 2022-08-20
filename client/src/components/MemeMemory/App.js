import './App.css'
import React from "react";
import SingleCard from './components/SingleCard';
import { useState } from 'react';
import sadcat from '../../assets/img/sad-cat.png'
const cardImages = [
  { src: "/img/sad-cat.png" },
  { src: "/img/spongebob.png" },
  { src: "/img/spongebob2.png" },
  { src: "/img/what.png" },
  { src: "/img/wasnt-me.png" },
  { src: "/img/mike-wasowski.png" },
];

const MemeMemory = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  //shuffle cards
    const shuffleCards= () =>{
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
      setCards(shuffledCards)
      setTurns(0)
     }

     //handle a choice
     const handleChoice = (card) => {
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
     }

     //reset choices & increase turn
     const resetTurn = () => {
       setChoiceOne(null)
       setChoiceTwo(null)
       setTurns(prevturns => prevturns + 1)
     }
  return (
    <div className="App">
      <h1>Meme Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className= "card-grid">
        {cards.map(card =>(
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          ))}
      </div>
    </div>
  );
};

 export default MemeMemory;