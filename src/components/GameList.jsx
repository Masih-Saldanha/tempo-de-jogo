import dayjs from "dayjs";
import Game from "./Game";

export default function GameList(props) {
  const { parsonName } = props;
  return (
    <div>
      <Game name="Astro Playroom" image="imagem 1" time="11/12/2020" parsonName={parsonName}></Game>
      <Game name="Nioh 1" image="imagem 2" time="02/07/2017" parsonName={parsonName}></Game>
      <Game name="Nioh 2" image="imagem 3" time="03/12/2020" parsonName={parsonName}></Game>
      <Game name="Returnal" image="imagem 4" time="04/30/2021" parsonName={parsonName}></Game>
      <Game name="Gran Turismo 7" image="imagem 5" time="03/04/2022" parsonName={parsonName}></Game>
      <Game name="Gran Turismo Sport" image="imagem 6" time="10/17/2017" parsonName={parsonName}></Game>
      <Game name="Uncharted 3" image="imagem 7" time="11/01/2011" parsonName={parsonName}></Game>
    </div>
  );
}
