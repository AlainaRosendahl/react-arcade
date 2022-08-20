import "./SingleCard.css";
import cover from "../../../assets/img/cover.png";

export default function SingleCard({ card, handleChoice}) {

const handleClick = () => {
handleChoice(card)
}

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img className="back" src={cover} alt="card back" onClick={handleClick}/>
      </div>
    </div>
  );
}
