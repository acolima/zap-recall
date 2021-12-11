import nextImg from "../../assets/next.png"
import "./style.css";

export default function Button({type, setDisplay, setShowResultPage, btnText, setIncorrectAnswer, setGoalCorrectAnswer}){
  const showDeck = (type === "showDeck")

  function handleRestart(){
    setShowResultPage(false)
    setDisplay("home")
    setIncorrectAnswer(0)
    setGoalCorrectAnswer("")
  }
  
  return(
    <button
      className="btn-start"  
      data-identifier="start-zap-recall"
      onClick={() => ((showDeck) ? setDisplay("deck") : handleRestart())}>
        <span className="txt-button">{btnText}</span>
        <img className="next-img" src={nextImg} alt="next"/>
    </button>
  )
}