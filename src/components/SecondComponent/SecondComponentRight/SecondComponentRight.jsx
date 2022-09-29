import { SecondComponentItem } from "./SecondComponentItem/SecondComponentItem";
import "./SecondComponentRight.css"

export function SecondComponentRight({componentData}) {
  return (
    <div className="second-component__right">
      {componentData.map((item, index)=> <SecondComponentItem key={index} titleData={item.title} textData={item.text}/>)}
    </div>
  );
}
