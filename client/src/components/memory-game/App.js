
import './App.css'
import React from "react";

const cardImages = [
  { src: "/img/sad-cat.png" },
  { src: "/img/spongebob.png" },
  { src: "/img/spongebob2.png" },
  { src: "/img/what.png" },
  { src: "/img/wasnt-me.png" },
  { src: "/img/mike-wasowski.png" },
];


const MemeMemory = () => {

  // const [cards, setCards] = useState([])
  // const [turns, setTurns] = useState(0)
  //   //shuffle cards
  //   const shuffleCards= () =>{
  //     const shuffledCards = [...cardImages, ...cardImages]
  //     .sort(()=>Math.random() - 0.5)
  //     .map((card) => ({ ...card, id: Math.random() }))
  
  //     setCards(shuffledCards)
  //     setTurns(0)
  //   }

  return (
    <div className="App">
      <h1>Meme Match</h1>
      {/* <button onClick={shuffleCards}>New Game</button> */}
    </div>
  );
};

export default MemeMemory;
