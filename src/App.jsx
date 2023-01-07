import { BrowserRouter, Route, Routes } from "react-router-dom";

import Person from "./pages/Person";
import Error from "./pages/Error";
import Main from "./pages/Main";

export default function App() {
  const drakeTime = [0, 1, 2];
  const mahzinhoTime = [3, 4, 5];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/drake"
          element={
            <Person name={"Drake"} image={"Drake Imagem"} time={drakeTime} />
          }
        ></Route>
        <Route
          exact
          path="/mahzinho"
          element={
            <Person
              name={"Mahzinho"}
              image={"Mahzinho Imagem"}
              time={mahzinhoTime}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
