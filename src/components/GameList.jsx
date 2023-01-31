import styled from "styled-components";

import Game from "./Game";

export default function GameList(props) {
  const { personName, twitter, hashtag, gameList } = props;
  return (
    <>
      <Panel>
        {gameList.map((game, index) => {
          const { name, image, time } = game;
          return (
            <Game
              key={index}
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
    </>
  );
}

const Panel = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: inherit;
`;
