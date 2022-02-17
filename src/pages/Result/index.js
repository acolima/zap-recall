import LogoMini from "../../components/LogoMini";
import Button from "../../components/Button";
import sucessImg from "../../assets/party.png"
import failureImg from "../../assets/sad.png"

import "./style.css"

export default function Result({ setDisplay, setShowResultPage, correctAnswer, setCorrectAnswer, goalCorrectAnswer, setGoalCorrectAnswer }) {
  let resultText, resultImg, resultMessage, altImg

  const nAnswersToGoal = (goalCorrectAnswer - correctAnswer)
  const resultSucess = (nAnswersToGoal === 0)

  if (resultSucess) {
    resultText = "PARABÉNS!"
    resultImg = sucessImg
    resultMessage = "Você não esqueceu de nenhum flashcard!"
    altImg = "sucesso"
  } else {
    resultText = "Putz.."
    resultImg = failureImg
    altImg = "fracasso"
    resultMessage = `Você esqueceu ${nAnswersToGoal} flashcards.. \n Não desanime! Na próxima você consegue!`
  }

  return (
    <div className="result-page">
      <LogoMini />
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
          setCorrectAnswer={setCorrectAnswer}
          setGoalCorrectAnswer={setGoalCorrectAnswer}
        />
      </div>
    </div>
  )
}