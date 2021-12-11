import LogoMini from "../LogoMini";
import Button from "../Button";
import sucessImg from "../../assets/party.png"
import failureImg from "../../assets/sad.png"

import "./style.css"

export default function Result({setDisplay, setShowResultPage, incorrectAnswer, setIncorrectAnswer, setCorrectAnswer, goalCorrectAnswer, setGoalCorrectAnswer}){
  let resultText, resultImg, resultMessage, resultMessageTemp, altImg;

  if(incorrectAnswer === 0 && goalCorrectAnswer === 0){ // INCOMPLETO
    resultText = "PARABÉNS!"
    resultImg = sucessImg
    resultMessage = "Você não esqueceu de nenhum flashcard!"
    altImg = "sucesso"
  }else{
    resultText = "Putz.."
    resultImg = failureImg
    resultMessage = `Você esqueceu ${incorrectAnswer} flashcards.. \n Não desanime! Na próxima você consegue!`
    altImg = "fracasso"
  }

  console.log(goalCorrectAnswer)
  //resultMessage = resultMessageTemp.replace("\n", "<br/>")

  return(
    <div className="result-page">
      <LogoMini/>
      <div className="result">
        <div>
          <h1 className="result-header">{resultText}</h1>
          <img src={resultImg} alt={altImg} />
        </div>
        <p className="result-message">{resultMessage}</p>
        <Button 
          type={"restart"} 
          setDisplay={setDisplay} 
          setShowResultPage={setShowResultPage} 
          btnText={"Tentar novamente"} 
          setIncorrectAnswer={setIncorrectAnswer}
          setCorrectAnswer={setCorrectAnswer}
          setGoalCorrectAnswer={setGoalCorrectAnswer}
        />
      </div>
    </div>
  )
}