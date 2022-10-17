import "./FooterCenterLeft.css";
import { NavLink } from "react-router-dom";
import { Lang } from "./../../../Header/LangQuote/Lang/Lang";

export function FooterCenterLeft({ state }) {
  return (
    <div className="footer__center-left">
      {state.map((item) => (
        <NavLink key={item.to} activeclassname="active" to={item.to}>
          {item.text}
        </NavLink>
      ))}
      <Lang left={true} lang={[{ smallName: "En" }]} />
    </div>
  );
}
