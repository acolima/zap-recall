import nextImg from "../../assets/next.png"
import "./style.css";

export default function Button({type, btnText, setDisplay, setShowResultPage, setCorrectAnswer, setGoalCorrectAnswer}){
  const showDeck = (type === "showDeck")

  function handleRestart(){
    setShowResultPage(false)
    setDisplay("home")
    setGoalCorrectAnswer("")
    setCorrectAnswer(0)
  }
  
  return(
    (showDeck) ?
      <button className="btn-start" data-identifier="start-zap-recall" onClick={() => setDisplay("deck")}>
        <span className="txt-button">{btnText}</span>
        <img className="next-img" src={nextImg} alt="next"/>
      </button>
      :
      <button className="btn-start" onClick={() => handleRestart()}>
        <span className="txt-button">{btnText}</span>
        <img className="next-img" src={nextImg} alt="next"/>
      </button>
  )
}