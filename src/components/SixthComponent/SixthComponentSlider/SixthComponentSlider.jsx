import Slider from "react-slick";
import { SixthComponentItem } from "./SixthComponentItem/SixthComponentItem";
import { SixthComponentProgress } from "./SixthComponentProgress/SixthComponentProgress";
import "./SixthComponentSlider.css";
import React, { useRef, useState } from "react";
import { SixthComponentDraggable } from "./SixthComponentDraggable/SixthComponentDraggable";

export function SixthComponentSlider({
  sliderSettings,
  setItemData,
  setNum,
  itemData,
  num,
}) {
  const slickk = useRef();
  let slick = slickk.current;
  let slidesShow =
    window.screen.width <= 992 ? 1 : window.screen.width <= 1200 ? 2 : 3;

  const [sl, setSl] = useState(0);

  const sliderSettingsThis = {
    ...sliderSettings,
    afterChange: function (index) {
      setItemData(newDataSet(index));
    },
    slidesToShow: slidesShow,
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
      <SixthComponentDraggable
        setSl={setSl}
        slick={slick}
        sl={sl}
        itemData={itemData}
      />
      <Slider ref={slickk} {...sliderSettingsThis}>
        {itemData.map((item, index) => (
          <SixthComponentItem key={index} item={item} />
        ))}
      </Slider>
      <SixthComponentProgress num={num} itemData={itemData} />
    </div>
  );
}
