import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Game from "./Game";

export default function GameList(props) {
  const { personName, twitter, hashtag, gameList } = props;
  const navigate = useNavigate();
  function orderByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  function orderByDate(a, b) {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }
  const [list, setList] = useState(gameList);
  return (
    <NewHeader>
      <header>
        <button onClick={() => navigate("/")}>Voltar</button>
        <menu>
          <button
            onClick={() => {
              setList([...gameList.sort(orderByName)]);
            }}
          >
            Ordenar por nome ⬆️
          </button>
          <button
            onClick={() => {
              setList([...gameList.sort(orderByName)].reverse());
            }}
          >
            Ordenar por nome ⬇️
          </button>
          <button
            onClick={() => {
              setList([...gameList.sort(orderByDate)]);
            }}
          >
            Ordenar por data ⬆️
          </button>
          <button
            onClick={() => {
              setList([...gameList.sort(orderByDate)].reverse());
            }}
          >
            Ordenar por data ⬇️
          </button>
        </menu>
      </header>
      <Panel>
        {list.map((game) => {
          const { name, image, time } = game;
          return (
            <Game
              key={name}
              name={name}
              image={image}
              time={time}
              personName={personName}
              twitter={twitter}
              hashtag={hashtag}
            ></Game>
          );
        })}
      </Panel>
    </NewHeader>
  );
}

const NewHeader = styled.div`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    background: #a49616;
    background: -moz-linear-gradient(
      left,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    );
    background: -webkit-linear-gradient(
      left,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    );
    background: linear-gradient(
      to right,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    );
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Panel = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: inherit;
`;
