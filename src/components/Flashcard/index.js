import { useState } from "react"
import turnImg from "../../assets/turn.png"
import "./style.css"

export default function Card({question, answer, setQuestionIndex, questionIndex, numberOfQuestions, setResultPage}){
  const [showQuestion, setShowQuestion] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [borderColor, setBorderColor] = useState("")
  const [nextQuestion, setNextQuestion] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  let color = ""

  function turnFlashcard(){
    setShowQuestion(false)
    setShowAnswer(true)
  }

  function handleAnswer(answer){
    color = "border-" + answer
    setBorderColor(color)
    setNextQuestion(true)
    if(answer === "incorrect")
      setIncorrectAnswer(true)
  }

  function showNextQuestion(){
    if(questionIndex === numberOfQuestions-1){ 
      if(incorrectAnswer) setResultPage("failure")
      else setResultPage("sucess")
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
        <span></span>
        {(showAnswer)?
          <span className="question-title">{question}</span> :
          <span className="question-title"></span>          
        }
        <span className="question-number">{questionIndex + 1}/8</span>
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
            <button onClick={() => handleAnswer("neutral")} className="neutral">Aprendi agora</button>
            <button onClick={() => handleAnswer("incorrect")} className="incorrect">Não lembrei</button>
            <button onClick={() => handleAnswer("correct-effort")} className="correct-effort">Lembrei com esforço</button>
            <button onClick={() => handleAnswer("correct")} className="correct">Zap!</button>
          </div>)
        )    
      }
    </div>
  )
}
