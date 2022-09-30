import { FourthComponentText } from "./FourthComponentText/FourthComponentText";
import "./FourthComponentSliderLeft.css"

export function FourthComponentSliderLeft({sliderData}) {
  return (
    <div className="fourth-component__slider-left">
      <h3>{sliderData.header}</h3>
      <p>{sliderData.text}</p>
      <FourthComponentText textItems={sliderData.textItems}/>
      <button>{sliderData.btnText}</button>
    </div>
  );
}
