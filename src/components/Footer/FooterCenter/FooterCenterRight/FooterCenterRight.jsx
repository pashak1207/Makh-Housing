import "./FooterCenterRight.css";
import { NavLink } from "react-router-dom";

export function FooterCenterRight({ state }) {
  return (
    <div className="footer__center-right">
      {state.map((item) => (
        <NavLink key={item.to} activeclassname="active" to={item.to}>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}
