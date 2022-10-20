import "./SixthComponent.css";
import { useState } from "react";
import { SixthComponentSlider } from "./SixthComponentSlider/SixthComponentSlider";
import { SixthComponentAddSlide } from "./SixthComponentAddSlide/SixthComponentAddSlide";

export function SixthComponent({ componentData }) {
  const [itemData, setItemData] = useState([...componentData.itemsData]);

  const [num, setNum] = useState(0);

  function addNewSlide() {
    setItemData([...itemData, { name: "new slide", image: "photo_2.png" }]);
  }

  return (
    <div id="5" className="sixth-component">
      <div className="sixth-component__wrapper">
        <h2>Ongoing projects</h2>
        <SixthComponentSlider
          sliderSettings={componentData.sliderSettings}
          setItemData={setItemData}
          setNum={setNum}
          itemData={itemData}
          num={num}
        />
        <SixthComponentAddSlide addNewSlide={addNewSlide} />
      </div>
    </div>
  );
}
