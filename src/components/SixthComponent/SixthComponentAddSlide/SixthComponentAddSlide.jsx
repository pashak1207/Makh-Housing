import Plus from "./../../../img/SixthComponent/icons/plus.svg";

export function SixthComponentAddSlide({ addNewSlide }) {
  return (
    <button onClick={addNewSlide}>
      <img src={Plus} alt="Add" />
    </button>
  );
}
