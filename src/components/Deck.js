import { useState } from "react";
import Card from "./Flashcard";
import LogoMini from "./LogoMini";

export default function Deck({setShowResultPage, incorrectAnswer, setIncorrectAnswer}){
  const [questionIndex, setQuestionIndex] = useState(0)
  let numberOfQuestions = 0;
  
  const questions = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é ___",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },/*
    {
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      question: "Usamos estado (state) para __",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },*/
  ]
  
  numberOfQuestions = questions.length;

  const questionsArray = questions.map((question) => (
    <Card
      {...question}
      setQuestionIndex={setQuestionIndex}
      questionIndex={questionIndex}
      numberOfQuestions={numberOfQuestions}
      setShowResultPage={setShowResultPage}
      incorrectAnswer={incorrectAnswer}
      setIncorrectAnswer={setIncorrectAnswer}
    />
  ))

  return(
    <div className="deck">
      <LogoMini/>
      {questionsArray[questionIndex]}
    </div>
  );
}