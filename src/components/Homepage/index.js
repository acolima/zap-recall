import logoImg from "../../assets/logo.png"
import Button from "../Button";
import "./style.css"

export default function Homepage({setDisplay, goalCorrectAnswer, setGoalCorrectAnswer}) {
  return(
    <div className="home">
      <div className="logo">
        <img src={logoImg} alt="logo"/>
      </div>
      <div>
        <input className="goal"
          onChange={(e) => setGoalCorrectAnswer(e.target.value)}
          type="text" 
          placeholder="Sua meta de zaps"
          value={goalCorrectAnswer}
        />
        <Button type={"showDeck"} setDisplay={setDisplay} btnText={"Praticar React"}/>
      </div>
    </div>
  );
}

