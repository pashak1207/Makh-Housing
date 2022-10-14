import "./SeventhComponentRightItem.css";

export function SeventhComponentRightItem({ image, text }) {
  return (
    <h3>
      <img
        src={require("./../../../../img/SeventhComponent/icons/" + image)}
        alt={text}
      />{" "}
      {text}
    </h3>
  );
}
