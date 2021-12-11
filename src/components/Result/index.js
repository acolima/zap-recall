import LogoMini from "../LogoMini";
import Button from "../Button";
import sucessImg from "../../assets/party.png"
import failureImg from "../../assets/sad.png"

import "./style.css"

export default function Result({setDisplay, setShowResultPage, incorrectAnswer, setIncorrectAnswer}){
  let resultText, resultImg, resultMessage, resultMessageTemp;

  if(incorrectAnswer === 0){
    resultText = "PARABÉNS!"
    resultImg = sucessImg
    resultMessage = "Você não esqueceu de nenhum flashcard!"
  }else{
    resultText = "Putz.."
    resultImg = failureImg
    resultMessage = `Você esqueceu ${incorrectAnswer} flashcards.. \n Não desanime! Na próxima você consegue!`
  }

  //resultMessage = resultMessageTemp.replace("\n", "<br/>")

  return(
    <div className="sucess-page">
      <LogoMini/>
      <div className="sucess">
        <div>
          <h1 className="sucess-header">{resultText}</h1>
          <img src={resultImg} alt="sucess" />
        </div>
        <p className="sucess-message">{resultMessage}</p>
        <Button type={"restart"} setDisplay={setDisplay} setShowResultPage={setShowResultPage} btnText={"Tentar novamente"} setIncorrectAnswer={setIncorrectAnswer}/>
      </div>
    </div>
  )
}