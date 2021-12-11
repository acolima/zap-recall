import logoImg from "../../assets/logo.png"
import Button from "../Button";
import "./style.css"

export default function Homepage({setDisplay}) {
  return(
    <div className="home">
      <div className="logo">
        <img src={logoImg} alt="logo"/>
      </div>
      <Button type={"showDeck"} setDisplay={setDisplay} btnText={"Praticar React"}/>
    </div>
  );
}

