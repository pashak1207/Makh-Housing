import "./ThirdComponent.css"
import Slider from "react-slick"
import { SlideItem } from "./SlideItem/SlideItem"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ThirdComponent({componentData}){
    return (
        <div className="third-component">
            <Slider {...componentData.sliderSettings}>
                {componentData.sliderData.map(item => <SlideItem key={item.slideNum} sliderData={item}/>)}
            </Slider>
        </div>
    )
}