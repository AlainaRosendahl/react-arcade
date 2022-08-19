import "./SingleCard.css";
import cover from "../../../assets/img/sad-cat.png";

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src="" alt="card front"></img>
        <img className="back" src={cover} alt="card back" />
      </div>
    </div>
  );
}
