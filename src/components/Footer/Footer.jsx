import "./Footer.css";
import Logo from "./../../img/Footer/icons/logo.svg";
import Intex from "./../../img/Footer/icons/intex.svg";
import { Lang } from "./../Header/LangQuote/Lang/Lang";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <img src={Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="footer__center">
          <div className="footer__center-left">
            <NavLink activeclassname="active" to="11">
              About us
            </NavLink>
            <NavLink activeclassname="active" to="22">
              Services
            </NavLink>
            <NavLink activeclassname="active" to="33">
              Projects
            </NavLink>
            <NavLink activeclassname="active" to="44">
              Contact us
            </NavLink>
            <Lang left={true} lang={[{ smallName: "En" }]} />
          </div>
          <div className="footer__center-right">
            <NavLink activeclassname="active" to="55">
              / Facebook
            </NavLink>
            <NavLink activeclassname="active" to="66">
              / Twitter
            </NavLink>
            <NavLink activeclassname="active" to="77">
              / LinkedIn
            </NavLink>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>© 2021 All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer__bottom-right">
            <p>
              Designed by <img src={Intex} alt="" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
