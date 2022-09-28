import ArrowDown from "./../../../img/header/icons/arrow_down_orange.svg"
import "./LangFull.css"

export function LangFull({lang}) {
  return (
    <div className="langFull">
      <p>{lang[0].name}</p>      
      <img src={ArrowDown} alt="" />
    </div>
  );
}
