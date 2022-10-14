import "./SeventhComponentRight.css";
import { SeventhComponentRightItem } from "./SeventhComponentRightItem/SeventhComponentRightItem";

export function SeventhComponentRight({ right }) {
  return (
    <div className="seventh-component__right">
      {right.items.map((item, index) => (
        <SeventhComponentRightItem
          key={index}
          image={item.image}
          text={item.text}
        />
      ))}
      <div className="seventh-component__rightImg">
        <img
          src={require("./../../../img/SeventhComponent/" + right.map)}
          alt="Map"
        />
      </div>
    </div>
  );
}
