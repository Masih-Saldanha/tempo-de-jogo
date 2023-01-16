import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Game(props) {
  const { name, image, time, parsonName } = props;

  const [userTime, setUserTime] = useState(dayjs(Date()));

  const now = dayjs(Date());
  const gameLaunch = dayjs(time);
  const years = now.diff(gameLaunch, "year");
  const months = now.diff(gameLaunch, "month");
  const days = now.diff(gameLaunch, "day");
  const hours = now.diff(gameLaunch, "hour");
  const minutes = now.diff(gameLaunch, "minute");
  const seconds = now.diff(gameLaunch, "second");

  useEffect(() => {
    const timer = setInterval(() => {
      setUserTime(dayjs(Date()).format());
    }, 1000);
    return () => clearInterval(timer);
  }, [userTime]);

  return (
    <Square img={image}>
      <h1>{parsonName} já está a:</h1>
      {years !== 1 ? <h2>{years} anos</h2> : <h2>{years} ano</h2>}
      <h2>{months} meses</h2>
      <h2>{days} dias</h2>
      <h2>{hours} horas</h2>
      <h2>{minutes} minutos</h2>
      <h2>{seconds} segundos</h2>
      <h3>Sem zerar {name}</h3>
    </Square>
  );
}

const Square = styled.div`
  border: 1px solid black;
  width: 250px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(35, 35, 35, 0.3);
  color: yellow;
  text-shadow: 3px 3px 3px #1C6EA4;
  h1 {
    padding-bottom: 10px;
  }
  h2 {
    color: rgb(255, 255, 255);
    text-shadow: rgb(6, 70, 0) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
      rgb(255, 255, 255) 0px 0px 15px, rgb(73, 255, 24) 0px 0px 20px,
      rgb(73, 255, 24) 0px 0px 30px, rgb(73, 255, 24) 0px 0px 40px,
      rgb(73, 255, 24) 0px 0px 55px, rgb(73, 255, 24) 0px 0px 75px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #030404;
  }
  h3 {
    padding-top: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255, 64, 0) 0px -1px 4px, rgb(255, 255, 0) 0px -2px 10px,
      rgb(255, 128, 0) 0px -10px 20px, red 0px -18px 40px;
    --darkreader-inline-color: #fffff7;
    --darkreader-inline-bgcolor: #161614;
  }

  background: url(${(props) => props.img}) no-repeat scroll 50% 50%;

  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;
