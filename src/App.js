import Homepage from "./components/Homepage";
import Deck from "./components/Deck";
import Result from "./components/Result"
import { useState } from "react";
import "./css/reset.css"
import "./css/style.css"


export default function App(){
  const [display, setDisplay] = useState("home");
  const [showResultPage, setShowResultPage] = useState(false)
  const [goalCorrectAnswer, setGoalCorrectAnswer] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(0)

  return(
    <>
      {(!showResultPage)?
        ((display === "home")?
          <Homepage 
            setDisplay={setDisplay} 
            goalCorrectAnswer={goalCorrectAnswer} 
            setGoalCorrectAnswer={setGoalCorrectAnswer}
          />
          :
          <Deck 
            setShowResultPage={setShowResultPage} 
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
          />
        ) :
        <Result 
          setDisplay={setDisplay} 
          setShowResultPage={setShowResultPage}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          goalCorrectAnswer={goalCorrectAnswer}
          setGoalCorrectAnswer={setGoalCorrectAnswer}
        /> 
      }
    </>
  );
}