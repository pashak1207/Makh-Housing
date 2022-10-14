import "./SeventhComponent.css";
import { SeventhComponentLeft } from "./SeventhComponentLeft/SeventhComponentLeft";
import { SeventhComponentRight } from "./SeventhComponentRight/SeventhComponentRight";

export function SeventhComponent({ componentData }) {
  return (
    <div className="seventh-component">
      <div className="seventh-component__wrapper">
        <SeventhComponentLeft left={componentData.left} />
        <SeventhComponentRight right={componentData.right} />
      </div>
    </div>
  );
}
