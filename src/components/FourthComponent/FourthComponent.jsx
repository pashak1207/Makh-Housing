import "./FourthComponent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FourthComponentSlider } from "./FourthComponentSlider/FourthComponentSlider";

export function FourthComponent({ componentData }) {
  return (
    <div id="3" className="fourth-component">
      <h2>Previous Projects</h2>
      <div className="fourth-component__wrapper">
        <Slider {...componentData.sliderSettings}>
          {componentData.sliderData.map((item) => (
            <FourthComponentSlider
              slidersCount={componentData.slidersCount}
              key={item.slideNum}
              sliderData={item}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
