import Homepage from "./components/Homepage";
import Deck from "./components/Deck";
import Result from "./components/Result"
import { useState } from "react";
import "./css/reset.css"
import "./css/style.css"


export default function App(){
  const [display, setDisplay] = useState("home");
  const [showResultPage, setShowResultPage] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(0)
  const [goalCorrectAnswer, setGoalCorrectAnswer] = useState("")

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
            incorrectAnswer={incorrectAnswer} 
            setIncorrectAnswer={setIncorrectAnswer} 
            setGoalCorrectAnswer={setGoalCorrectAnswer}
            goalCorrectAnswer={goalCorrectAnswer}
          />
        ) :
        <Result 
          setDisplay={setDisplay} 
          setShowResultPage={setShowResultPage} 
          incorrectAnswer={incorrectAnswer} 
          setIncorrectAnswer={setIncorrectAnswer}
          goalCorrectAnswer={goalCorrectAnswer}
          setGoalCorrectAnswer={setGoalCorrectAnswer}
        /> 
      }
    </>
  );
}