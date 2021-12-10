import Homepage from "./components/Homepage";
import Deck from "./components/Deck";
import Sucess from "./components/Sucess"
import Failure from "./components/Failure"
import { useState } from "react";
import "./css/reset.css"
import "./css/style.css"


export default function App(){
  const [display, setDisplay] = useState("home");
  const [resultPage, setResultPage] = useState("")

  return(
    <>
      {(resultPage === "")?
        ((display === "home")?
          <Homepage setDisplay={setDisplay}/>
          :
          <Deck setResultPage={setResultPage}/>
        ) :
        (resultPage === "sucess")?
          <Sucess/> 
          :
          <Failure/>
      }
    </>
  );
}