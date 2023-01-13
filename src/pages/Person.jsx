import { useNavigate } from "react-router-dom";

import GameList from "../components/GameList";

export default function Person(props) {
  const { name, image } = props;
  const navigate = useNavigate();
  return (
    <>
      <h1>{name}</h1>
      <h1>{image}</h1>
      <GameList parsonName={name}></GameList>
      <button onClick={() => navigate("/")}>Voltar</button>
    </>
  );
}
