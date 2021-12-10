import { useState } from "react"
import turnImg from "../../assets/turn.png"
import "./style.css"

export default function Card({question, answer, setQuestionIndex, questionIndex, numberOfQuestions}){
  const [showQuestion, setShowQuestion] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [borderColor, setBorderColor] = useState("")
  const [nextQuestion, setNextQuestion] = useState(false)
  let color = ""


  function turnFlashcard(){
    setShowQuestion(false)
    setShowAnswer(true)
  }

  function changeBorder(button){
    color = "border-" + button
    setBorderColor(color)
    setNextQuestion(true)
  }

  function showNextQuestion(){
    if(questionIndex === numberOfQuestions-1){ 
      alert("acabou")
    }
    else{
      setQuestionIndex(questionIndex + 1)
      setShowAnswer(false)
      setShowQuestion(true)
      setBorderColor("")
      setNextQuestion(false)
    }
  }

  return(
    <div className={`card ${borderColor}`}>
      <div className="card-header">
        <div></div>
        {(showAnswer)?
          <span className="question-title">{question}</span> :
          <span className="question-title"></span>          
        }
        <span className="card-number">{questionIndex + 1}/8</span>
      </div>
      {(showQuestion)? 
        <div className="question">{question}</div> :
        <div className="answer">{answer}</div>
      }
      {(nextQuestion)?
        (<div className="turn" onClick={() => showNextQuestion()}>
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
