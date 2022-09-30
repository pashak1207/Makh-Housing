import "./FourthComponent.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FourthComponentSlider } from "./FourthComponentSlider/FourthComponentSlider";

export function FourthComponent({componentData, slidersCount}) {
  return (
    <div className="fourth-component">
      <h2>Previous Projects</h2>
      <div className="fourth-component__wrapper">
        <Slider {...componentData.sliderSettings}>
            {componentData.sliderData.map(item => <FourthComponentSlider slidersCount={slidersCount} key={item.slideNum} sliderData={item}/>)}
        </Slider>
      </div>
    </div>
  );
}
