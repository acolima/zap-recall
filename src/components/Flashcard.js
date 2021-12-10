import turnImg from "../assets/turn.png"
import { useState } from "react"

export default function Card({question, questionNumber, answer}){
  const [showQuestion, setShowQuestion] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [buttonClicked, setButtonClicked] = useState("") // maybe is used on the bonus?
  const [borderColor, setBorderColor] = useState("")
  const [nextQuestion, setNextQuestion] = useState(false)
  let color = ""

  function changeBorder(button){
    color = "border-" + button
    setButtonClicked(button)
    setBorderColor(color)
    setNextQuestion(true)
  }

  function turnFlashcard(){
    setShowQuestion(false)
    setShowAnswer(true)
  }

  return(
    <div className={`card ${borderColor}`}>
        <div className="card-header">
          <div></div>
          {(showAnswer)?
            <span className="question-title">{question}</span> :
            <span className="question-title"></span>          
          }
          <span className="card-number">{questionNumber}/8</span>
        </div>
        {(showQuestion)? 
          <div className="question">{question}</div> :
          <div className="answer">{answer}</div>
        }
        {(nextQuestion)?
          (<div className="turn" onClick={() => turnFlashcard()}>
            <img src={turnImg} alt="turn" />
          </div>):
          ((showQuestion)?
            (<div className="turn" onClick={() => turnFlashcard()}>
              <img src={turnImg} alt="turn" />
            </div>) :
            (<div className="buttons">
              <button onClick={() => changeBorder("neutral")} className="neutral">Aprendi agora</button>
              <button onClick={() => changeBorder("incorrect")} className="incorrect">Não lembrei</button>
              <button onClick={() => changeBorder("correct-effort")} className="correct-effort">Lembrei com esforço</button>
              <button onClick={() => changeBorder("correct")} className="correct">Zap!</button>
            </div>)
          )    
        }
    </div>
  )
}
