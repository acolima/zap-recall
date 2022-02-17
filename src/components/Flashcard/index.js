/* eslint-disable react/prop-types */
import React, { useState } from "react"
import turnImg from "../../assets/turn.png"
import "./style.css"

export default function Flashcard(
  { question, answer, numberOfQuestions,
    setShowResultPage,
    setQuestionIndex, questionIndex,
    correctAnswer, setCorrectAnswer
  }) {

  const [showQuestion, setShowQuestion] = useState(true)
  const [borderColor, setBorderColor] = useState("")
  const [nextQuestion, setNextQuestion] = useState(false)
  let color = ""

  function showNextQuestion() {
    if (questionIndex === numberOfQuestions - 1)
      setShowResultPage(true)
    else {
      setQuestionIndex(questionIndex + 1)
      setShowQuestion(true)
      setBorderColor("")
      setNextQuestion(false)
    }
  }

  function handleAnswer(answer) {
    color = "border-" + answer
    setBorderColor(color)
    setNextQuestion(true)
    if (answer === "correct")
      setCorrectAnswer(correctAnswer + 1)
  }

  return (
    <div className={`card ${borderColor}`} data-identifier="flashcard">
      <div className="card-header">
        <span className="question-title">{(!showQuestion) ? question : ""}</span>
        <span className="question-number" data-identifier="counter">{questionIndex + 1}/{numberOfQuestions}</span>
      </div>
      {(showQuestion) ?
        (<>
          <div className="question">{question}</div>
          <div className="arrow" data-identifier="arrow">
            <img src={turnImg} alt="arrow" onClick={() => setShowQuestion(false)} />
          </div>
        </>)
        :
        (<>
          <div className="answer">{answer}</div>
          {(!nextQuestion) ?
            <div className="buttons">
              <button onClick={() => handleAnswer("neutral")} className="neutral">Aprendi agora</button>
              <button onClick={() => handleAnswer("incorrect")} className="incorrect">Não lembrei</button>
              <button onClick={() => handleAnswer("correct-effort")} className="correct-effort">Lembrei com esforço</button>
              <button onClick={() => handleAnswer("correct")} className="correct"><strong>Zap!</strong></button>
            </div>
            :
            <div className="arrow" onClick={() => showNextQuestion()} data-identifier="arrow">
              <img src={turnImg} alt="arrow" />
            </div>
          }
        </>)
      }
    </div>
  )
}