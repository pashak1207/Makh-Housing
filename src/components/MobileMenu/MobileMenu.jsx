import { Quote } from "./../Header/LangQuote/Quote/Quote"
import "./MobileMenu.css"
import { MenuTop } from "./MenuTop/MenuTop"
import { MenuSocmedia } from "./MenuSocmedia/MenuSocmedia"
import { LangFull } from "./LangFull/LangFull"
import { MobileNav } from "./MobileNav/MobileNav"

export function MobileMenu({headerData, isOpen, closeMobileMenu}){
    return (
        <div className={isOpen ? "mobile-menu active" : "mobile-menu"}>
            <MenuTop closeMobileMenu={closeMobileMenu}/>
            <MobileNav navItems={headerData.mobileNavItems}/>
            <Quote/>
            <MenuSocmedia socMedia={headerData.socMedia}/>
            <LangFull lang={headerData.lang}/>
        </div>
    )
}