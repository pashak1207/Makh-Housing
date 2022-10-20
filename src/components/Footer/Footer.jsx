import "./Footer.css";
import { FooterTop } from "./FooterTop/FooterTop";
import { FooterCenter } from "./FooterCenter/FooterCenter";
import { FooterBottom } from "./FooterBottom/FooterBottom";

export function Footer({ lang, options, setLang, componentData }) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterTop
          options={options}
          lang={lang}
          setLang={setLang}
          state={componentData.state.stateTop}
        />
        <FooterCenter
          lang={lang}
          setLang={setLang}
          state={componentData.state.stateCenter}
          options={options}
        />
        <FooterBottom state={componentData.state.stateBottom} />
      </div>
    </footer>
  );
}
