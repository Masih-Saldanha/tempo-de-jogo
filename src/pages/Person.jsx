import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GameList from "../components/GameList";

export default function Person(props) {
  const { name, twitter, hashtag } = props;
  const navigate = useNavigate();
  return (
    <Main>
      <button onClick={() => navigate("/")}>Voltar</button>
      <GameList parsonName={name} twitter={twitter} hashtag={hashtag}></GameList>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 10px;

    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 16px;
    padding: 6px;
    border-radius: 10px;
    font-family: Georgia, serif;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    background-image: linear-gradient(
      to right,
      rgb(28, 110, 164) 0%,
      rgb(35, 136, 203) 50%,
      rgb(20, 78, 117) 100%
    );
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 2px solid rgb(28, 110, 164);
    display: inline-block;
  }
  button:hover {
    background: #1c6ea4;
  }
  button:active {
    background: #144e75;
  }
`;
