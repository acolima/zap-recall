import Homepage from "./pages/Homepage";
import Deck from "./components/Deck";
import Result from "./pages/Result"
import React, { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("home");
  const [showResultPage, setShowResultPage] = useState(false)
  const [goalCorrectAnswer, setGoalCorrectAnswer] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState(0)

  return (
    <>
      {!showResultPage &&
        (display === "home" ?
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
        )
      }
      {showResultPage &&
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