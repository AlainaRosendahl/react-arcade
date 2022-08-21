import styled from "styled-components";
import ScoreBoard from "../components/ScoreBoard";
// import Navbar from "../../../../components/Nav/Nav";

export default function Header({ score, bestScore, reset, setReset }) {
    
    return (
        <HeaderWrap>
            <Heading>
                <TitleWrap>
                    <span className="title">2048</span>
                    <span className="sub-title">Have Fun!</span>
                </TitleWrap>
                <ScoreBoard score={score} bestScore={bestScore} />
            </Heading>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.header`
    min-height : 1rem;
    text-align: left;
    padding: 0 4rem;
`

const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 1rem;
`

const TitleWrap = styled.h1`
    font-weight: bold;
    flex: 1;
    text-align: left;
    white-space: nowrap;
    & .title{
        font-size: 4rem;
        color: Orange;
    }
    & .sub-title{
        display: inline-block;
        font-size: 1.2rem;
        margin-left: 6px;
        color: #8d440b;
        margin: 1px 0 4px 4px;
        &::first-letter{
            color: Orange;
        }
    }
`;