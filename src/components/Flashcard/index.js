import { useState } from "react"
import turnImg from "../../assets/turn.png"
import "./style.css"

export default function Card({question, answer, setQuestionIndex, questionIndex, numberOfQuestions, setShowResultPage, setIncorrectAnswer, incorrectAnswer}){
  const [showQuestion, setShowQuestion] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [borderColor, setBorderColor] = useState("")
  const [nextQuestion, setNextQuestion] = useState(false)
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
      setIncorrectAnswer(incorrectAnswer+1)
  }

  function showNextQuestion(){
    if(questionIndex === numberOfQuestions-1)
      setShowResultPage(true)
    else{
      setQuestionIndex(questionIndex + 1)
      setShowAnswer(false)
      setShowQuestion(true)
      setBorderColor("")
      setNextQuestion(false)
    }
  }

  return(
    <div className={`card ${borderColor}`} data-identifier="flashcard">
      <div className="card-header">
        <span className="question-title">{(showAnswer) ? question : ""}</span>
        <span className="question-number" data-identifier="counter">{questionIndex + 1}/{numberOfQuestions}</span>
      </div>
      {(showQuestion)? 
        <div className="question">{question}</div> :
        <div className="answer">{answer}</div>
      }
      {(nextQuestion)?
        (<div className="arrow" onClick={() => showNextQuestion()} data-identifier="arrow">
          <img src={turnImg} alt="arrow" />
        </div>)
        :
        ((showQuestion)?
          (<div className="arrow" onClick={() => turnFlashcard()} data-identifier="arrow">
            <img src={turnImg} alt="arrow" />
          </div>) 
          :
          (<div className="buttons">
            <button onClick={() => handleAnswer("neutral")} className="neutral">Aprendi agora</button>
            <button onClick={() => handleAnswer("incorrect")} className="incorrect">Não lembrei</button>
            <button onClick={() => handleAnswer("correct-effort")} className="correct-effort">Lembrei com esforço</button>
            <button onClick={() => handleAnswer("correct")} className="correct"><strong>Zap!</strong></button>
          </div>)
        )    
      }
    </div>
  )
}

// será que dá pra criar um componente Arrow?