import { SeventhComponentForm } from "./SeventhComponentForm/SeventhComponentForm";
import "./SeventhComponentLeft.css";

export function SeventhComponentLeft({ left }) {
  return (
    <div className="seventh-component__left">
      <h2>{left.header}</h2>
      <SeventhComponentForm left={left} />
    </div>
  );
}
