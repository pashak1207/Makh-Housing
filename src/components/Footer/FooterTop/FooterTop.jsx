import "./FooterTop.css";
import Logo from "./../../../img/Footer/icons/logo.svg";

export function FooterTop({ state }) {
  return (
    <div className="footer__top">
      <img src={Logo} alt="logo" />
      <p>{state.text}</p>
    </div>
  );
}
