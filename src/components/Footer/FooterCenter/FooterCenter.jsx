import "./FooterCenter.css";
import { FooterCenterLeft } from "./FooterCenterLeft/FooterCenterLeft";
import { FooterCenterRight } from "./FooterCenterRight/FooterCenterRight";

export function FooterCenter({ lang, options, setLang, state }) {
  return (
    <div className="footer__center">
      <FooterCenterLeft
        lang={lang}
        setLang={setLang}
        options={options}
        state={state.leftState}
      />
      <FooterCenterRight state={state.rightState} />
    </div>
  );
}
