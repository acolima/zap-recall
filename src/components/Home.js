import logoImg from "../assets/logo.png"
import nextImg from "../assets/next.png"

export default function Home({setDisplay} ){

  return(
    <div className="home">
      <div className="logo">
        <img src={logoImg} alt="logo"/>
      </div>
      <button className="btn-practice" onClick={() => setDisplay("deck")}>
        <span className="txt-button">Praticar React </span>
        <img className="next-img" src={nextImg} alt="next"/>
      </button>
    </div>
  );
}