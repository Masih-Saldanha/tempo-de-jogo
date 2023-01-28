import styled from "styled-components";

import GameList from "../components/GameList";

export default function Person(props) {
  const { name, twitter, hashtag, gameList } = props;
  return (
    <Main>
      <GameList
        personName={name}
        twitter={twitter}
        hashtag={hashtag}
        gameList={gameList}
      ></GameList>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    /* background: #a49616; */
    /* background: -moz-linear-gradient(
      left,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    ); */
    /* background: -webkit-linear-gradient(
      left,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    ); */
    /* background: linear-gradient(
      to right,
      #a49616 0%,
      #cbbb27 50%,
      #747511 100%
    ); */
    background: #197503;
    background: -moz-linear-gradient(
      left,
      #197503 0%,
      #43cb00 50%,
      #197503 100%
    );
    background: -webkit-linear-gradient(
      left,
      #197503 0%,
      #43cb00 50%,
      #197503 100%
    );
    background: linear-gradient(
      to right,
      #197503 0%,
      #43cb00 50%,
      #197503 100%
    );
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  }

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
    box-shadow: rgb(0, 0, 0) 1px 1px 10px 1px;
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
