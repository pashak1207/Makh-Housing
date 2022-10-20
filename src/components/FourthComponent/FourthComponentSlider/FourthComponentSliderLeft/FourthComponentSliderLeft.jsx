import { FourthComponentText } from "./FourthComponentText/FourthComponentText";
import { HashLink as Link } from "react-router-hash-link";
import "./FourthComponentSliderLeft.css";

export function FourthComponentSliderLeft({ sliderData }) {
  return (
    <div className="fourth-component__slider-left">
      <h3>{sliderData.header}</h3>
      <p>{sliderData.text}</p>
      <FourthComponentText textItems={sliderData.textItems} />
      <button>
        <Link to={"/pathLink#6"}>{sliderData.btnText}</Link>
      </button>
    </div>
  );
}
