import { SlideText } from "./SlideText/SlideText";

export function SlideItem({ sliderData }) {
  return (
    <div className="third-component__slide">
      <h2>{sliderData.header}</h2>
      <div className="third-component__house">
        <img src={require( "./../../../img/ThirdComponent/" + sliderData.image )} alt="House" />
        {sliderData.textItems.map(item => <SlideText key={item.num} textData={item}/>)}
      </div>
    </div>
  );
}
