import "./FifthComponent.css";
import { FifthComponentBottom } from "./FifthComponentBottom/FifthComponentBottom";
import { useState } from "react";

export function FifthComponent({ componentData }) {
  const [active, setActive] = useState(componentData.itemData);

  function isActiveNum() {
    for (let i = 0; i < active.length; i++) {
      if (active[i].isActive) {
        return i;
      }
    }
  }

  setTimeout(() => {
    onCompClick(
      "0" + (isActiveNum() + 1 < active.length ? isActiveNum() + 2 : 1)
    );
  }, componentData.sliderSpeed);

  function onCompClick(num) {
    const newArr = active.map((item) =>
      item.num === num
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setActive(newArr);
  }

  return (
    <div id="4" className="fifth-component">
      <div className="fifth-component__wrapper">
        {window.screen.width <= 992 && <h2>Services</h2>}
        <img
          src={require("./../../img/FifthComponent/" +
            active[isActiveNum()].image)}
          alt="House"
        />
        <FifthComponentBottom active={active} onCompClick={onCompClick} />
      </div>
    </div>
  );
}
