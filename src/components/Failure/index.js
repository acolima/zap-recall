import LogoMini from "../LogoMini";
import failureImg from "../../assets/sad.png"
import "./style.css"

export default function Failure(){
  return(
    <div className="failure-page">
      <LogoMini/>
      <div className="failure">
        <div>
          <h1 className="failure-header">Putz..</h1>
          <img src={failureImg} alt="failure" />
        </div>
        <p className="failure-message">Você esqueceu alguns flashcards.. <br/>Não desanime! Na próxima você consegue!</p>
      </div>
    </div>
  )
}