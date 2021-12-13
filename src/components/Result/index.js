import LogoMini from "../LogoMini";
import Button from "../Button";
import sucessImg from "../../assets/party.png"
import failureImg from "../../assets/sad.png"

import "./style.css"

export default function Result({setDisplay, setShowResultPage, correctAnswer, setCorrectAnswer, goalCorrectAnswer, setGoalCorrectAnswer}){
  let resultText, resultImg, resultMessage, altImg

  const totalCorrectAnswers = (goalCorrectAnswer - correctAnswer)
  const resultSucess = (totalCorrectAnswers === 0)

  if(resultSucess){
     resultText = "PARABÉNS!"
     resultImg = sucessImg
     resultMessage = "Você não esqueceu de nenhum flashcard!"
     altImg = "sucesso"
  }else{
     resultText = "Putz.."
     resultImg = failureImg
     altImg = "fracasso"
     resultMessage = `Você esqueceu ${totalCorrectAnswers} flashcards.. \n Não desanime! Na próxima você consegue!`
  }

  return(
    <div className="result-page">
      <LogoMini/>
      <div className="result">
        <div>
          <h1 className="result-header">{resultText}</h1>
          <div><img src={resultImg} alt={altImg} /></div>
        </div>
        <p className="result-message">{resultMessage}</p>
        <Button 
          type={"restart"} 
          setDisplay={setDisplay} 
          setShowResultPage={setShowResultPage} 
          btnText={"Tentar novamente"} 
          setCorrectAnswer={setCorrectAnswer}
          setGoalCorrectAnswer={setGoalCorrectAnswer}
        />
        </div>
    </div>
  )
}