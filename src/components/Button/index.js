import nextImg from "../../assets/next.png"
import "./style.css";

export default function Button({ type, btnText, setDisplay, setShowResultPage, setCorrectAnswer, setGoalCorrectAnswer }) {
  const showDeck = (type === "showDeck")

  function handleRestart() {
    setShowResultPage(false)
    setDisplay("home")
    setGoalCorrectAnswer("")
    setCorrectAnswer(0)
  }

  return (
    <button
      className="btn-start"
      data-identifier="start-zap-recall"
      onClick={() => showDeck ? setDisplay("deck") : handleRestart()}
    >
      <span className="txt-button">{btnText}</span>
      <img className="next-img" src={nextImg} alt="next" />
    </button>
  )
}