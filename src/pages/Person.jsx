import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GameList from "../components/GameList";

export default function Person(props) {
  const { name, image } = props;
  const navigate = useNavigate();
  return (
    <Main img={image}>
      <div>
        {/* <h1>{name}</h1> */}
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={() => navigate("/")}>Cobrar o {name}</button>
      </div>
      <GameList parsonName={name}></GameList>
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
