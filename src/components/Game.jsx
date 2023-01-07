export default function Game(props) {
  const { name, image, time } = props;
  //    TODO: FAZER CONTADOR
  return (
    <>
      <h1>{name}</h1>
      <h1>{image}</h1>
      <h1>Tempo sem zerar = {time}</h1>
    </>
  );
}
