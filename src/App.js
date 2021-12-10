import Homepage from "./components/Homepage";
import Deck from "./components/Deck";

import { useState } from "react";
import "./css/reset.css"
import "./css/style.css"


export default function App(){
  const [display, setDisplay] = useState("home");

  return(
    <>
      {(display === "home")?
      <Homepage setDisplay={setDisplay}/>:
      <Deck/>}
    </>
  );
}