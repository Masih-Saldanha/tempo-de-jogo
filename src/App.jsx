import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Person from "./pages/Person";
import Error from "./pages/Error";
import Main from "./pages/Main";
import livePix from "./assets/livepix.png";
import pidao from "./assets/pidao.mp3"

export default function App() {
  const [buttonPix, setButtonPix] = useState(false);
  function orderByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  const listaDrake = [
    {
      name: "Astro Playroom",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png",
      time: dayjs("11/12/2020"),
    },
    {
      name: "Nioh 1",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Nioh_Complete_Edition_kostenlos_gratis_epic_games_store.jpeg",
      time: dayjs("02/07/2017"),
    },
    {
      name: "Nioh 2",
      image: "https://teamninja-studio.com/nioh2/img/main_bg_sp.jpg",
      time: dayjs("03/12/2020"),
    },
    {
      name: "Returnal",
      image:
        "https://assets.reedpopcdn.com/digitalfoundry-2021-returnal-absolute-housemarque-1619782008897.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/digitalfoundry-2021-returnal-absolute-housemarque-1619782008897.jpg",
      time: dayjs("04/30/2021"),
    },
    {
      name: "Gran Turismo 5",
      image: "https://adrenaline.com.br/uploads/2009/08/24/2534/gt8.jpg",
      time: dayjs("11/24/2010"),
    },
    {
      name: "Gran Turismo 6",
      image: "https://www.gran-turismo.com/images/c/i1r4CLxB5BAvlhH.jpg",
      time: dayjs("12/06/2013"),
    },
    {
      name: "Gran Turismo 7",
      image:
        "https://adrenaline.com.br/uploads/chamadas/imagem_2022-09-28_143917210.png",
      time: dayjs("03/04/2022"),
    },
    {
      name: "Gran Turismo Sport",
      image:
        "https://image.api.playstation.com/cdn/UP9000/CUSA03220_00/ULcLzYTrbuBPHcuOdbE6eWOIvvttdKV4.png",
      time: dayjs("10/17/2017"),
    },
    {
      name: "Uncharted 3",
      image:
        "https://www.meme-arsenal.com/memes/af6b75ede45204e5840f46204950b39e.jpg",
      time: dayjs("11/01/2011"),
    },
    {
      name: "Tokyo Jungle",
      image:
        "http://4.bp.blogspot.com/-Lv3tqt3IK6w/UHvakRW3YII/AAAAAAAAIKw/EIOpew9HXZ4/s1600/Tokyo-Jungle-Trailer_4-3.jpg",
      time: dayjs("06/06/2012"),
    },
    {
      name: "Flow",
      image: "https://i.ytimg.com/vi/TvSzNmXWcZU/maxresdefault.jpg",
      time: dayjs("04/14/2006"),
    },
    {
      name: "Flower",
      image:
        "https://assets2.ignimgs.com/2013/11/13/flower1112131280jpg-885176_160w.jpg?width=1280",
      time: dayjs("02/12/2009"),
    },
    {
      name: "Journey",
      image:
        "https://blogs-images.forbes.com/erikkain/files/2012/12/Journey-Screen-Two.jpg",
      time: dayjs("03/13/2012"),
    },
    {
      name: "Little Big Planet 1",
      image:
        "https://e.snmc.io/lk/l/x/219dba8766bc257ee95b62ce60b45d0f/9312714",
      time: dayjs("11/03/2008"),
    },
    {
      name: "Little Big Planet 2",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/8/83/LittleBigPlanet_2_capa.png",
      time: dayjs("01/18/2011"),
    },
    {
      name: "Little Big Planet 3",
      image:
        "https://cdn.sistemawbuy.com.br/arquivos/ded4bf383ac7594db68adad1798e2141/produtos/YOU7HAE9/little-big-planet-3-ps3-61e0572e40526_mini.jpg",
      time: dayjs("11/18/2014"),
    },
    {
      name: "Resistance 2",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/0/0f/Resistance_2_capa.png",
      time: dayjs("04/07/2008"),
    },
    {
      name: "Resistance 3",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/Resistance_3_box_artwork.png",
      time: dayjs("09/06/2011"),
    },
    {
      name: "Killzone 3",
      image: "https://upload.wikimedia.org/wikipedia/en/9/91/Killzone_3.jpg",
      time: dayjs("02/22/2011"),
    },
    {
      name: "Heavy Rain",
      image:
        "https://cdn.awsli.com.br/1000x1000/1345/1345600/produto/69131738/5e29fbd089.jpg",
      time: dayjs("02/23/2010"),
    },
    {
      name: "Haze",
      image: "https://m.media-amazon.com/images/I/518wrFCoBOL._AC_SX342_.jpg",
      time: dayjs("05/20/2008"),
    },
    {
      name: "Puppeter",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/32/Puppeteer_cover.png",
      time: dayjs("09/05/2013"),
    },
    {
      name: "White Knight Chronicles 1",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/19/White_Knight_Chronicles.jpg",
      time: dayjs("12/25/2008"),
    },
    {
      name: "White Knight Chronicles 2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cc/White_Knight_Chronicles_2.png",
      time: dayjs("07/08/2010"),
    },
    {
      name: "Socom 4 US Navy Seals",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a8/SOCOM_4.png",
      time: dayjs("04/19/2011"),
    },
    {
      name: "Locoroco 2",
      image:
        "https://image.api.playstation.com/cdn/UP9000/CUSA06091_00/quYajy8BGPv03IiGRCLNHIiXwaYVEHnF.png",
      time: dayjs("11/21/2008"),
    },
    {
      name: "Folklore",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/de/Folklore_%28videogame%29_boxart.jpg",
      time: dayjs("06/21/2007"),
    },
    {
      name: "Tearaway Unfolded",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/4/42/Tearaway_Unfolded_capa.png/270px-Tearaway_Unfolded_capa.png",
      time: dayjs("09/08/2015"),
    },
    {
      name: "Knack 1",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/d/dc/Knack_capa_oficial_ps4.jpg",
      time: dayjs("11/15/2013"),
    },
    {
      name: "Knack 2",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202011/0522/82QdmxXvA9Vpqro5t8pSTEOR.png",
      time: dayjs("09/06/2017"),
    },
    {
      name: "Déraciné",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/Derecine_artwork.jpg",
      time: dayjs("11/06/2018"),
    },
  ].sort(orderByName);
  const listaMahzinho = [
    {
      name: "Astro Playroom",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png",
      time: dayjs("11/12/2020"),
    },
  ].sort(orderByName);
  const pidaoSound = new Audio(pidao);
  return (
    <BrowserRouter>
      <LivePix>
        {!buttonPix ? (
          <button onClick={() => {
            pidaoSound.play();
            setButtonPix(true);
          }}>Contribua</button>
        ) : (
          <menu>
            <h1>Ajude este site a se manter e zoar com mais sonystas</h1>
            <img src={livePix} />
            <div>
              <a href={`https://livepix.gg/senpaidefamilia`} target="_blank">
                Doe
              </a>
              <a
                href={`https://livepix.gg/senpaidefamilia/assinatura`}
                target="_blank"
              >
                Assine
              </a>
            </div>
            <button onClick={() => setButtonPix(false)}>Voltar</button>
          </menu>
        )}
      </LivePix>
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/drake"
          element={
            <Person
              name={"Drake"}
              twitter={"@drakesincero5"}
              hashtag={"%23LaveACaraDrake"}
              gameList={listaDrake}
            />
          }
        ></Route>
        <Route
          exact
          path="/mahzinho"
          element={
            <Person
              name={"Mahzinho"}
              twitter={"@mahzinho"}
              hashtag={"%23LaveACaraSemRegras"}
              gameList={listaMahzinho}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
const LivePix = styled.aside`
  position: fixed;
  top: 0px;
  left: 0px;
  text-align: center;
  z-index: 1;
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
      rgb(164, 28, 28) 0%,
      rgb(203, 35, 35) 50%,
      rgb(117, 20, 20) 100%
    );
    box-shadow: rgb(0, 0, 0) 1px 1px 10px 1px;
    border: 2px solid rgb(164, 28, 28);
    display: inline-block;
  }
  button:hover {
    background: #a41c1c;
  }
  button:active {
    background: #751414;
  }
  a {
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
      rgb(164, 155, 28) 0%,
      rgb(203, 192, 35) 50%,
      rgb(117, 107, 20) 100%
    );
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 2px solid rgb(155, 164, 28);
    display: inline-block;
  }
  a:hover {
    background: #9ba41c;
  }
  a:active {
    background: #737514;
  }
  menu {
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    h1 {
      font-size: 20px;
      margin: 20px;

      color: rgb(255, 255, 255);
      text-shadow: rgb(6, 70, 0) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
        rgb(255, 255, 255) 0px 0px 15px, rgb(73, 255, 24) 0px 0px 20px,
        rgb(73, 255, 24) 0px 0px 30px, rgb(73, 255, 24) 0px 0px 40px,
        rgb(73, 255, 24) 0px 0px 55px, rgb(73, 255, 24) 0px 0px 75px;
      --darkreader-inline-color: #fffff7;
      --darkreader-inline-bgcolor: #030404;
    }
  }
`;
