import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Person from "./pages/Person";
import Error from "./pages/Error";
import Main from "./pages/Main";
import livePix from "./assets/livepix.png";
import { useState } from "react";

export default function App() {
  const [buttonPix, setButtonPix] = useState(false);
  return (
    <BrowserRouter>
      <LivePix>
        {!buttonPix ? (
          <button onClick={() => setButtonPix(true)}>Contribua</button>
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
    box-shadow: rgb(0, 0, 0) 2px 2px 15px 5px;
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
