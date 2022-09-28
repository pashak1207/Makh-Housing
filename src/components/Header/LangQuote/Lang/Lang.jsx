import ArrowDown from "./../../../../img/header/icons/arrow_down_orange.svg"
import SilverStick from "./../../../../img/header/icons/silver_stick.svg"
import "./Lang.css"

export function Lang({lang}) {
  return (
    <div className="lang">
      <p>{lang[0].smallName}</p>      
      <img src={ArrowDown} alt="" />
      <img src={SilverStick} alt="" />
    </div>
  );
}
