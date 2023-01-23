import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import drakeImg from "./../assets/drake_01.jpeg";
import mahzinhoImg from "./../assets/mahzinho_bloqueado.jpeg";
import obrigadoAudio from "./../assets/obrigado.mp3";
import mahzinhoAudio from "./../assets/audio_mazinho.mp3";
import bg from "./../assets/bg.mp3";

export default function Main() {
  const navigate = useNavigate();
  const bgMusic = new Audio(bg);
  const audioPrata = new Audio(obrigadoAudio);
  const audioMahzinho = new Audio(mahzinhoAudio);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   bgMusic.play();
  //   console.log("teste");
  // }, []);
  return (
    <Page>
      <h2>Descubra aqui o que o seu Mestre quer esconder de você!</h2>
      <Menu>
        <Image img={drakeImg}>
          <div
            onClick={() => {
              if (loading) {
                return;
              } else {
                setLoading(true);
                audioPrata.play();
                setTimeout(() => {
                  setLoading(false);
                  navigate("/drake");
                }, 7000);
              }
            }}
          >
            CLIQUE AQUI!
          </div>
        </Image>
        <ImageMahzinho img={mahzinhoImg}>
          <div
            onClick={() => {
              if (loading) {
                return;
              } else {
                setLoading(true);
                audioMahzinho.play();
                setTimeout(() => {
                  setLoading(false);
                  // navigate("/mahzinho");
                }, 10000);
              }
            }}
          >
            EM BREVE
          </div>
        </ImageMahzinho>
      </Menu>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    margin: 20px;
    font-size: 20px;

    color: rgb(255, 255, 255);
    text-shadow: rgb(6, 70, 0) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
      rgb(255, 255, 255) 0px 0px 15px, rgb(73, 255, 24) 0px 0px 20px,
      rgb(73, 255, 24) 0px 0px 30px, rgb(73, 255, 24) 0px 0px 40px,
      rgb(73, 255, 24) 0px 0px 55px, rgb(73, 255, 24) 0px 0px 75px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #030404;
  }
`;

const Menu = styled.menu`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Image = styled.div`
  margin: 20px;

  border: 1px solid black;
  border-radius: 10%;
  width: 300px;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat 50% 10%;

  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 30px;
    padding-top: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255, 64, 0) 0px -1px 4px, rgb(255, 255, 0) 0px -2px 10px,
      rgb(255, 128, 0) 0px -10px 20px, red 0px -18px 40px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #161614;
  }
  div:hover {
    text-shadow: rgb(255, 255, 0) 0px -1px 4px, rgb(255, 64, 0) 0px -2px 10px,
      red 0px -10px 20px, rgb(255, 128, 0) 0px -18px 40px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #161614;
  }
`;

const ImageMahzinho = styled.div`
  margin: 20px;

  border: 1px solid black;
  border-radius: 10%;
  width: 300px;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat 20% 0%;

  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 30px;
    padding-top: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255, 64, 0) 0px -1px 4px, rgb(255, 255, 0) 0px -2px 10px,
      rgb(255, 128, 0) 0px -10px 20px, red 0px -18px 40px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #161614;
  }
  div:hover {
    text-shadow: rgb(255, 255, 0) 0px -1px 4px, rgb(255, 64, 0) 0px -2px 10px,
      red 0px -10px 20px, rgb(255, 128, 0) 0px -18px 40px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #161614;
  }
`;
