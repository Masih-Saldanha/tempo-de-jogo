import { BrowserRouter, Route, Routes } from "react-router-dom";

import Drake from "./pages/Drake";
import Error from "./pages/Error";
import Main from "./pages/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/drake" element={<Drake />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
