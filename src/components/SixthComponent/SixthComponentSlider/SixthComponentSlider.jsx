import Slider from "react-slick";
import { SixthComponentItem } from "./SixthComponentItem/SixthComponentItem";
import { SixthComponentProgress } from "./SixthComponentProgress/SixthComponentProgress";
import "./SixthComponentSlider.css";

export function SixthComponentSlider({
  sliderSettings,
  setItemData,
  setNum,
  itemData,
  num,
}) {
  const sliderSettingsThis = {
    ...sliderSettings,
    afterChange: function (index) {
      setItemData(newDataSet(index));
    },
  };

  function newDataSet(index) {
    let newData = itemData;
    for (let i = 0; i < newData.length; i++) {
      if (i === index) {
        newData[i].onStart = true;
      } else {
        newData[i].onStart = false;
      }
    }
    numOnStart();
    return newData;
  }

  function numOnStart() {
    for (let i = 0; i < itemData.length; i++) {
      if (itemData[i].onStart) {
        setNum(i);
      }
    }
  }

  return (
    <div className="sixth-component__slider">
      <Slider {...sliderSettingsThis}>
        {itemData.map((item, index) => (
          <SixthComponentItem key={index} item={item} />
        ))}
      </Slider>
      <SixthComponentProgress num={num} itemData={itemData} />
    </div>
  );
}
