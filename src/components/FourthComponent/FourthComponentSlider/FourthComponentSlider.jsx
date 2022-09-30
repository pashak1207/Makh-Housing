import { FourthComponentSliderLeft } from "./FourthComponentSliderLeft/FourthComponentSliderLeft";
import "./FourthComponentSlider.css"

export function FourthComponentSlider({sliderData, slidersCount}) {
  return (
    <div className="fourth-component__slider">
      <FourthComponentSliderLeft sliderData={sliderData}/>
      <div className="fourth-component__slider-right">
        <img src={require( "./../../../img/FourthComponent/" + sliderData.image )} alt="" />
      </div>
      <p>{sliderData.slideNum} <span>{"/" + slidersCount()}</span></p>
    </div>
  );
}
