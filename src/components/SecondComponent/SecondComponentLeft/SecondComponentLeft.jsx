import House from "./../../../img/SecondComponent/house.png"
import "./SecondComponentLeft.css"

export function SecondComponentLeft() {
  return (
    <div className="second-component__left">
      <img src={House} alt="House" />
    </div>
  );
}
