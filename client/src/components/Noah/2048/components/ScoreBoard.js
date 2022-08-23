import styled from "styled-components";

export default function ScoreBoard({ score, bestScore }) {
    return (
        <Board>
            <div>
                <label>CURRENT SCORE</label>
                <p>{score}</p>
            </div>
            <div>
                <label>HIGH SCORE</label>
                <p>{bestScore}</p>
            </div>
        </Board>
    );
}

const Board = styled.div`
    flex:.8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div{
        border-radius: 4px;
        background-color: #Black;
        padding: 1rem;
        font-weight: bold;
        text-align: center;
        min-width: 48%;
        & label{
            display: block;
            margin-bottom: 4px;
            color: #ffffffb0;
            font-size: 1.2rem;
        }
        & p{
            color: Orange;
            font-size: 2rem;
        }
        &:last-child{
            margin-left: 4px;
        }
    }
`