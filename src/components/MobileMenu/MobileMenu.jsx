import { Quote } from "./../Header/LangQuote/Quote/Quote";
import "./MobileMenu.css";
import { MenuTop } from "./MenuTop/MenuTop";
import { MenuSocmedia } from "./MenuSocmedia/MenuSocmedia";
import { Lang } from "./../Header/LangQuote/Lang/Lang";
import { MobileNav } from "./MobileNav/MobileNav";

export function MobileMenu({
  options,
  lang,
  setLang,
  headerData,
  isOpen,
  closeMobileMenu,
}) {
  return (
    <div className={isOpen ? "mobile-menu active" : "mobile-menu"}>
      <MenuTop closeMobileMenu={closeMobileMenu} />
      <MobileNav navItems={headerData.mobileNavItems} />
      <Quote />
      <MenuSocmedia socMedia={headerData.socMedia} />
      <Lang options={options} lang={lang} setLang={setLang} />
    </div>
  );
}
