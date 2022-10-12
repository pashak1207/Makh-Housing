import "./SixthComponentProgress.css";

export function SixthComponentProgress({ num, itemData }) {
  function calcWidth() {
    return ((num + 1) / itemData.length) * 100 + "%";
  }

  return (
    <div className="sixth-component__progress">
      <div
        className="sixth-component__progressWidth"
        style={{ width: calcWidth() }}
      ></div>
    </div>
  );
}
