import CloseMenu from "./../../../img/MobileMenu/icons/close_menu.svg"
import { Logo } from "./../../Header/Logo/Logo"

export function MenuTop({closeMobileMenu}) {
  return (
    <div className="menu-top">
      <Logo />
      <button onClick={closeMobileMenu}>
        <img src={CloseMenu} alt="Close" />
      </button>
    </div>
  );
}
