import Game from "./Game";

export default function GameList(props) {
    const { time } = props
  return (
    <div>
      <Game name="Jogo 1" image="imagem 1" time={time[0]}></Game>
      <Game name="Jogo 2" image="imagem 2" time={time[1]}></Game>
      <Game name="Jogo 3" image="imagem 3" time={time[2]}></Game>
    </div>
  );
}
