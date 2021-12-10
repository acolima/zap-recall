import Card from "./Flashcard";
import LogoMini from "./LogoMini";

export default function Deck(){

  const questions = [
    {
      questionNumber: "1",
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    
  ]

  return(
    <div className="deck">
      <LogoMini/>
      {questions.map((question) => (
        <Card
          question={question.question}
          questionNumber={question.questionNumber}
          answer={question.answer}
        />
      ))}

    </div>
  );
}