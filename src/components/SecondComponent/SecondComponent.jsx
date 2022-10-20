import "./SecondComponent.css";
import { SecondComponentTop } from "./SecondComponentTop/SecondComponentTop";
import { SecondComponentLeft } from "./SecondComponentLeft/SecondComponentLeft";
import { SecondComponentRight } from "./SecondComponentRight/SecondComponentRight";
import { SecondComponentText } from "./SecondComponentText/SecondComponentText";

export function SecondComponent({ componentData }) {
  return (
    <div id="1" className="second-component">
      <div className="second-component__wrapper">
        <SecondComponentTop />
        <SecondComponentText />
        <div className="second-component__container">
          <SecondComponentLeft />
          <SecondComponentRight componentData={componentData} />
        </div>
      </div>
    </div>
  );
}
