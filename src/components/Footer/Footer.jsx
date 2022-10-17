import "./Footer.css";
import { FooterTop } from "./FooterTop/FooterTop";
import { FooterCenter } from "./FooterCenter/FooterCenter";
import { FooterBottom } from "./FooterBottom/FooterBottom";

export function Footer({ componentData }) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterTop state={componentData.state.stateTop} />
        <FooterCenter state={componentData.state.stateCenter} />
        <FooterBottom state={componentData.state.stateBottom} />
      </div>
    </footer>
  );
}
