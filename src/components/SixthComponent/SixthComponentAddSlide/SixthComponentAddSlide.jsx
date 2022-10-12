import Plus from "./../../../img/SixthComponent/icons/plus.svg";
import "./SixthComponentAddSlide.css";

export function SixthComponentAddSlide({ addNewSlide }) {
  return (
    <button onClick={addNewSlide}>
      <img src={Plus} alt="Add" />
    </button>
  );
}
