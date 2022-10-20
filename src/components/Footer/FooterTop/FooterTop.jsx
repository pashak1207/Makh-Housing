import "./FooterTop.css";
import Logo from "./../../../img/Footer/icons/logo.svg";
import { Lang } from "./../../Header/LangQuote/Lang/Lang";

export function FooterTop({ lang, setLang, state, options }) {
  return (
    <div className="footer__top">
      <img src={Logo} alt="logo" />
      <p>{state.text}</p>
      {window.screen.width <= 992 && (
        <Lang left={true} options={options} lang={lang} setLang={setLang} />
      )}
    </div>
  );
}
