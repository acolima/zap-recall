import logoImg from "../../assets/logo.png"
import nextImg from "../../assets/next.png"
import "./style.css"

export default function Homepage({setDisplay}) {
  return(
    <div className="home">
      <div className="logo">
        <img src={logoImg} alt="logo"/>
      </div>
      <button className="btn-start" onClick={() => setDisplay("deck")} data-identifier="start-zap-recall">
        <span className="txt-button">Praticar React</span>
        <img className="next-img" src={nextImg} alt="next"/>
      </button>
    </div>
  );
}

