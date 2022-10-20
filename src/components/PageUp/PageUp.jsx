import "./PageUp.css";
import Arrow from "./../../img/PageUp/icons/arrow_up.svg";

export function PageUp() {
  function eventClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div onClick={eventClick} className="pageUp">
      <img src={Arrow} alt="Page up" />
    </div>
  );
}
