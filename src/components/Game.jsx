import dayjs from "dayjs";
import { useEffect, useState } from "react";

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
    <>
      <h1>{image}</h1>
      <h1>{parsonName} já está a:</h1>
      <h1>{years} anos</h1>
      <h1>{months} meses</h1>
      <h1>{days} dias</h1>
      <h1>{hours} horas</h1>
      <h1>{minutes} minutos</h1>
      <h1>{seconds} segundos</h1>
      <h1>Sem zerar {name}</h1>
    </>
  );
}
