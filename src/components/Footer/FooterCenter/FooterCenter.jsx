import "./FooterCenter.css";
import { FooterCenterLeft } from "./FooterCenterLeft/FooterCenterLeft";
import { FooterCenterRight } from "./FooterCenterRight/FooterCenterRight";

export function FooterCenter({ state }) {
  return (
    <div className="footer__center">
      <FooterCenterLeft state={state.leftState} />
      <FooterCenterRight state={state.rightState} />
    </div>
  );
}
