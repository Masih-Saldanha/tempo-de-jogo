import styled from "styled-components";

import Game from "./Game";

export default function GameList(props) {
  const { parsonName, twitter, hashtag } = props;
  return (
    <Panel>
      <Game
        name="Astro Playroom"
        image="https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png"
        time="11/12/2020"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Nioh 1"
        image="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Nioh_Complete_Edition_kostenlos_gratis_epic_games_store.jpeg"
        time="02/07/2017"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Nioh 2"
        image="https://teamninja-studio.com/nioh2/img/main_bg_sp.jpg"
        time="03/12/2020"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Returnal"
        image="https://assets.reedpopcdn.com/digitalfoundry-2021-returnal-absolute-housemarque-1619782008897.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/digitalfoundry-2021-returnal-absolute-housemarque-1619782008897.jpg"
        time="04/30/2021"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Gran Turismo 7"
        image="https://adrenaline.com.br/uploads/chamadas/imagem_2022-09-28_143917210.png"
        time="03/04/2022"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Gran Turismo Sport"
        image="https://http2.mlstatic.com/D_NQ_NP_880802-MLA44340121161_122020-O.jpg"
        time="10/17/2017"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
      <Game
        name="Uncharted 3"
        image="https://www.meme-arsenal.com/memes/af6b75ede45204e5840f46204950b39e.jpg"
        time="11/01/2011"
        parsonName={parsonName}
        twitter={twitter}
        hashtag={hashtag}
      ></Game>
    </Panel>
  );
}

const Panel = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
