import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import drakeImg from "./../assets/drake_01.jpeg";
import mahzinhoImg from "./../assets/mahzinho_bloqueado.jpeg";
import prataImg from "./../assets/prata.jpg";
import passaPanoImg from "./../assets/passapano.png";

import obrigadoAudio from "./../assets/obrigado.mp3";
import prataAudio from "./../assets/prataAudio.mp3";
import passaPanoAudio from "./../assets/passaPanoAudio.mp3";
import robertinhoAudio from "./../assets/robertinhoAudio.mp3";
import mahzinhoAudio from "./../assets/audio_mahzinho_curto.mp3";

export default function Main() {
  const navigate = useNavigate();
  const audioDrake = new Audio(obrigadoAudio);
  const audioPrata = new Audio(prataAudio);
  const audioPassaPano = new Audio(passaPanoAudio);
  const audioRobertinho = new Audio(robertinhoAudio);
  const audioMahzinho = new Audio(mahzinhoAudio);
  const [loading, setLoading] = useState(false);

  function navigateToPersonPage(person, audio, time) {
    if (person === "/mahzinho") {
      if (loading) {
        return;
      } else {
        setLoading(true);
        audio.play();
        setTimeout(() => {
          setLoading(false);
        }, time);
      }
    } else if (loading) {
      return;
    } else {
      setLoading(true);
      audio.play();
      setTimeout(() => {
        setLoading(false);
        navigate(person);
      }, time);
    }
  }

  return (
    <Page>
      <h2>Descubra aqui o que o seu Mestre quer esconder de você!</h2>
      <Menu>
        <ImageDrake img={drakeImg}>
          <h1 onClick={() => navigateToPersonPage("/drake", audioDrake, 1000)}>
            CLIQUE AQUI!
          </h1>
        </ImageDrake>
        <ImagePrata img={prataImg}>
          <h1 onClick={() => navigateToPersonPage("/prata", audioPrata, 1000)}>
            CLIQUE AQUI!
          </h1>
        </ImagePrata>
        <ImagePassaPano img={passaPanoImg}>
          <h1 onClick={() => navigateToPersonPage("/passapano", audioPassaPano, 2000)}>
            CLIQUE AQUI!
          </h1>
        </ImagePassaPano>
        <ImageRobertinho img={"https://i.ytimg.com/vi/BXRX9b_D6Q4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkSt0-wBrctVUhnRJ1VnvNt0INYQ"}>
          <h1 onClick={() => navigateToPersonPage("/robertinho", audioRobertinho, 3000)}>
            CLIQUE AQUI!
          </h1>
        </ImageRobertinho>
        <ImageMahzinho img={mahzinhoImg}>
          <h1
            onClick={() =>
              navigateToPersonPage("/mahzinho", audioMahzinho, 3000)
            }
          >
            EM BREVE
          </h1>
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
  margin-top: 50px;
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    margin: 20px;

    border: 1px solid black;
    border-radius: 10%;
    width: 300px;
    height: 300px;

    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 30px;
      padding-top: 20px;
      font-weight: bold;
      color: rgb(255, 255, 255);
      text-shadow: rgb(255, 64, 0) 0px -1px 4px, rgb(255, 255, 0) 0px -2px 10px,
        rgb(255, 128, 0) 0px -10px 20px, red 0px -18px 40px;
      --darkreader-inline-color: #fffff7;
      --darkreader-inline-bgcolor: #161614;
    }
    h1:hover {
      text-shadow: rgb(255, 255, 0) 0px -1px 4px, rgb(255, 64, 0) 0px -2px 10px,
        red 0px -10px 20px, rgb(255, 128, 0) 0px -18px 40px;
      --darkreader-inline-color: #fffff7;
      --darkreader-inline-bgcolor: #161614;
    }
  }
`;

const ImageDrake = styled.div`
  background: url(${(props) => props.img}) no-repeat 50% 10%;
`;

const ImagePrata = styled.div`
  background: url(${(props) => props.img}) no-repeat 70% 0%;
  background-size: cover;
`;

const ImagePassaPano = styled.div`
  background: url(${(props) => props.img}) no-repeat 0% 45%;
  background-size: cover;
`;

const ImageRobertinho = styled.div`
  background: url(${(props) => props.img}) no-repeat 100% 0%;
  background-size: cover;
`;

const ImageMahzinho = styled.div`
  background: url(${(props) => props.img}) no-repeat 20% 0%;
`;
