import { BrowserRouter, Route, Routes } from "react-router-dom";

import Person from "./pages/Person";
import Error from "./pages/Error";
import Main from "./pages/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/drake"
          element={<Person name={"Drake"} image={"Drake Imagem"} />}
        ></Route>
        <Route
          exact
          path="/mahzinho"
          element={<Person name={"Mahzinho"} image={"Mahzinho Imagem"} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
