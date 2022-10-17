import "./FooterBottomRight.css";
import Intex from "./../../../../img/Footer/icons/intex.svg";

export function FooterBottomRight() {
  return (
    <div className="footer__bottom-right">
      <p>
        Designed by <img src={Intex} alt="" />
      </p>
    </div>
  );
}
