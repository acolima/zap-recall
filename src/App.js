import Deck from "./components/Deck";
import Home from "./components/Home";

import { useState } from "react";
import "./css/reset.css"
import "./css/style.css"


export default function App(){
  const [display, setDisplay] = useState("home");

  return(
    <>
      {(display === "home")?
        <Home setDisplay={setDisplay}/> :
        <Deck/>}
    </>
  );
}