import logoImg from "../../assets/logo-mini.png"
import "./style.css"

export default function LogoMini(){
  return(
    <div className="logo-mini">
      <img src={logoImg} alt="logo"/>
    </div>
  );
}