import LogoMini from "../LogoMini";
import sucessImg from "../../assets/party.png"
import "./style.css"

export default function Sucess(){
  return(
    <div className="sucess-page">
      <LogoMini/>
      <div className="sucess">
        <div>
          <h1 className="sucess-header">PARABÉNS!</h1>
          <img src={sucessImg} alt="sucess" />
        </div>
        <p className="sucess-message">Você não esqueceu de nenhum flashcard!</p>
      </div>
    </div>
  )
}