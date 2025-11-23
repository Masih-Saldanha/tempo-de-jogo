import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Person from "./pages/Person";
import Error from "./pages/Error";
import Main from "./pages/Main";
import BG from "./components/BG";

// import livePix from "./assets/livepix.png";
import forspokenImage from "./assets/forspokenEstourado.jpeg";

// import pidao from "./assets/1_real.mp3";

export default function App() {
  // const [buttonPix, setButtonPix] = useState(false);
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
        "https://image.api.playstation.com/vulcan/img/rnd/202011/1019/E2IzmkaxyV5MFb5xqsTJeXdp.png",
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
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2122/vQqEXW0BefsUqAyJTelwjmuA.png",
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
      image: "http://www.arkade.com.br/wp-content/uploads/2011/03/games-killzone-3.jpg",
      time: dayjs("02/22/2011"),
    },
    {
      name: "Heavy Rain",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202011/0518/bzbFEyekkbOzChcaWQXk2koL.png",
      time: dayjs("02/23/2010"),
    },
    {
      name: "Haze",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIS7KQjW9DmdE289EXelA5MoDcgULWHc7tSrS0LeuAqfqHTx2sRFdvDjOZn1SK8OdmkU&usqp=CAU",
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
        "https://assets-prd.ignimgs.com/2022/03/02/whiteknightchronicles-1646242188946.jpg",
      time: dayjs("12/25/2008"),
    },
    {
      name: "White Knight Chronicles 2",
      image:
        "https://assets-prd.ignimgs.com/2022/03/02/whiteknight2-1646239800791.jpg?width=300&crop=1%3A1%2Csmart",
      time: dayjs("07/08/2010"),
    },
    {
      name: "Socom 4 US Navy Seals",
      image: "https://assets-prd.ignimgs.com/2022/03/01/socom4-sq-1646173401563.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-_b4H78Wx7264W8U-uP6D0_cwTicAUu_Vv_gfOxk90Zh-3VM29GlX7d13vqoM0ckvhM&usqp=CAU",
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
        "https://assets-prd.ignimgs.com/2022/01/15/knack-sq-1642207975394.jpg",
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
  const listaPrata = [
    {
      name: "Forspoken",
      image: forspokenImage,
      time: dayjs("01/24/2023"),
    },
  ].sort(orderByName);
  // const listaPassaPano = [
  //   {
  //     name: "Forspoken",
  //     image: forspokenImage,
  //     time: dayjs("01/24/2023"),
  //   },
  // ].sort(orderByName);
  // const listaMahzinho = [
  //   {
  //     name: "Astro Playroom",
  //     image:
  //       "https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png",
  //     time: dayjs("11/12/2020"),
  //   },
  // ].sort(orderByName);
  const listaRobertinho = [
    {
      name: "Hi-Fi Rush",
      image: "https://cdn1.epicgames.com/offer/577c5cbc303a4d168b1a104f3b46e751/EGS_HiFiRUSH_TangoGameworks_S2_1200x1600-3d260fc3a00c507e281502993c0ab6ff",
      time: dayjs("01/25/2023"),
    },
    {
      name: "High on Life",
      image: "https://media.zenfs.com/es/levelup_525/5a5763320356890837ab470dcce7b5cb",
      time: dayjs("12/13/2022"),
    },
    {
      name: "Dead Space Remake",
      image: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/01/12/deadspace-remake-023-qy1ojtqewjmr.jpg",
      time: dayjs("01/27/2023"),
    },
    {
      name: "Shadow of the Tomb Raider",
      image: "https://upload.wikimedia.org/wikipedia/pt/f/f7/Shadow_of_the_Tomb_Raider_capa.png",
      time: dayjs("09/12/2018"),
    },
  ].sort(orderByName);
  // const pidaoSound = new Audio(pidao);
  return (
    <BrowserRouter>
      <BGButton>
        <BG />
      </BGButton>
      {/* 
      <LivePix>
        <button
          onClick={() => {
            pidaoSound.play();
            setButtonPix(true);
          }}
        >
          Contribua
        </button>
        {!buttonPix ? (
          <></>
        ) : (
          <menu>
            <h1>Ajude este site a se manter e zoar</h1>
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
      */}
      
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/drake"
          element={
            <Person
              name={"Drake"}
              twitter={"@Drakesincero5"}
              hashtag={"%23LaveACaraDrake"}
              gameList={listaDrake}
            />
          }
        ></Route>
        <Route
          exact
          path="/prata"
          element={
            <Person
              name={"Prata"}
              twitter={"@jogadormito1"}
              hashtag={"%23LaveACaraPrata"}
              gameList={listaPrata}
            />
          }
        ></Route>
        {/* 
        <Route
          exact
          path="/passapano"
          element={
            <Person
              name={"Passa Pano"}
              twitter={"@Lord_PSMG"}
              hashtag={"%23LaveACaraPassaPano"}
              gameList={listaPassaPano}
            />
          }
        ></Route>
      */}
        <Route
          exact
          path="/robertinho"
          element={
            <Person
              name={"Robertinho"}
              twitter={"@robertinthegame"}
              hashtag={"%23LaveACaraRobertinho"}
              gameList={listaRobertinho}
            />
          }
        ></Route>
        {/* 
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
      */}
      </Routes>
    </BrowserRouter>
  );
}

const BGButton = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 2px 2px 0px 2px;
  z-index: 1;
  background-color: white;
  border-radius: 50%;
  box-shadow: rgb(0, 0, 0) 1px 1px 10px 1px;
`;

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
