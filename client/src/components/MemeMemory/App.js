import './App.css'
import React, { useEffect } from "react";
import SingleCard from './components/SingleCard';
import { useState } from 'react';
// import sadcat from '../../assets/img/sad-cat.png'
const cardImages = [
  { src: "assets/img/sad-cat.png", matched: false },
  { src: "assets/img/spongebob.png", matched: false },
  { src: "assets/img/spongebob2.png", matched: false },
  { src: "assets/img/what.png", matched: false },
  { src: "assets/img/wasnt-me.png", matched: false },
  { src: "assets/img/mike-wasowski.png", matched: false },
];

const MemeMemory = () => {
// belh
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  //shuffle cards
    const shuffleCards= () =>{
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
     }

     //handle a choice
     const handleChoice = (card) => {
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
     }

    // compare two selected cards
    useEffect (()=> {
      if (choiceOne && choiceTwo) {
        setDisabled(true)
        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card =>{
              if (card.src === choiceOne.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
          })
          resetTurn()
        } else {
          setTimeout(() => resetTurn(), 1000)
        }
      }
    }, [choiceOne, choiceTwo])
console.log(cards)
     //reset choices & increase turn
     const resetTurn = () => {
       setChoiceOne(null)
       setChoiceTwo(null)
       setTurns(prevturns => prevturns + 1)
       setDisabled(false)
     }
// starts new game automatically
     useEffect(()=> {
      shuffleCards()
     }, [])

  return (
    <div className="App">
      <h1>Meme Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className= "card-grid">
        {cards.map(card =>(
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched} 
          disabled={disabled}/>
          ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

 export default MemeMemory;