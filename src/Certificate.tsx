import "./css/Certificate.css";
import data from "./datajson.json";
const logo = require("./img/certinal.png");
interface info {
  name: string;
  evaluate: string;
  date: string;
}

export function print(): any {
  const nameInput: any = document.getElementsByClassName("nameInput");
  nameInput[0].style.left = data.nameInputLeft;
  nameInput[0].style.top = data.nameInputTop;
  nameInput[0].style.fontSize = data.nameInputFontSize;

  const evaluateInput: any = document.getElementsByClassName("evaluateInput");
  evaluateInput[0].style.left = data.evaluateInputLeft;
  evaluateInput[0].style.top = data.evaluateInputTop;
  evaluateInput[0].style.fontSize = data.evaluateInputFontSize;

  const dateInput: any = document.getElementsByClassName("dateInput");
  dateInput[0].style.left = data.dateInputLeft;
  dateInput[0].style.bottom = data.dateInputBottom;
  dateInput[0].style.fontSize = data.dateInputFontSize;

  const leftSide: any = document.getElementsByClassName("left-side ");
  leftSide[0].style.width = "100%";

  const rightSide: any = document.getElementsByClassName("right-side ");
  rightSide[0].style.display = "none";

  const contentWrapper: any =
    document.getElementsByClassName("content-wrapper");
  contentWrapper[0].style.width = "100%";
  contentWrapper[0].style.height = "100%";
  contentWrapper[0].style.border = "none";
  window.print();

  const backGround: any = document.getElementsByClassName("root");
  backGround[0].style.display = "none";
}

function Certificate(prop: info) {
  return (
    <div className="content-wrapper" id="main">
      <div id="printable">
        <span className="nameInput">{prop.name}</span>
        <span className="evaluateInput">{prop.evaluate}</span>
        <span className="dateInput">{prop.date}</span>

        <img src={logo} alt="" className="backG" />
      </div>
    </div>
  );
}

export default Certificate;
