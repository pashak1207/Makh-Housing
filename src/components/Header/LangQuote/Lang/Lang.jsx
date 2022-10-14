import ArrowDown from "./../../../../img/header/icons/arrow_down_orange.svg";
import SilverStick from "./../../../../img/header/icons/silver_stick.svg";
import "./Lang.css";

export function Lang({ lang, left }) {
  return (
    <div className="lang">
      <p
        style={{
          color: left ? "#fff" : "",
          order: left ? "2" : "1",
        }}
      >
        {lang[0].smallName}
      </p>
      <img style={{ order: left ? "3" : "2" }} src={ArrowDown} alt="" />
      <img
        style={{
          marginRight: left ? "24px" : "",
          order: left ? "1" : "3",
        }}
        src={SilverStick}
        alt=""
      />
    </div>
  );
}
