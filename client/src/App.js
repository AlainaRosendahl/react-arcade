import "./index.css";
import Home from "./routes/Home";
import Noah from "./routes/Noah";
import Alaina from "./routes/Alaina";
import Bryan from "./routes/Bryan";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Noah" element={<Noah />}></Route>
        <Route path="/Alaina" element={<Alaina />}></Route>
        <Route path="/Bryan" element={<Bryan />}></Route>
      </Routes>
    </>
  );
}

export default App;