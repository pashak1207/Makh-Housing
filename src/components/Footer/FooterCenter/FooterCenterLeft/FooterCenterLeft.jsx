import "./FooterCenterLeft.css";
import { NavLink } from "react-router-dom";
import { Lang } from "./../../../Header/LangQuote/Lang/Lang";

export function FooterCenterLeft({ lang, options, setLang, state }) {
  return (
    <div className="footer__center-left">
      {state.map((item) => (
        <NavLink key={item.to} activeclassname="active" to={item.to}>
          {item.text}
        </NavLink>
      ))}
      {window.screen.width > 992 && (
        <Lang left={true} options={options} lang={lang} setLang={setLang} />
      )}
    </div>
  );
}
