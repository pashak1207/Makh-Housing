import "./FooterBottom.css";
import { FooterBottomLeft } from "./FooterBottomLeft/FooterBottomLeft";
import { FooterBottomRight } from "./FooterBottomRight/FooterBottomRight";

export function FooterBottom({ state }) {
  return (
    <div className="footer__bottom">
      <FooterBottomLeft state={state} />
      <FooterBottomRight />
    </div>
  );
}
