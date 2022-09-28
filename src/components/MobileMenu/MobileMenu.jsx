import { Nav } from "./../Header/Nav/Nav"
import { Quote } from "./../Header/LangQuote/Quote/Quote"
import "./MobileMenu.css"
import { MenuTop } from "./MenuTop/MenuTop"
import { MenuSocmedia } from "./MenuSocmedia/MenuSocmedia"
import { LangFull } from "./LangFull/LangFull"

export function MobileMenu({headerData, isOpen, closeMobileMenu}){
    return (
        <div className={isOpen ? "mobile-menu active" : "mobile-menu"}>
            <MenuTop closeMobileMenu={closeMobileMenu}/>
            <Nav navItems={headerData.navItems}/>
            <Quote/>
            <MenuSocmedia socMedia={headerData.socMedia}/>
            <LangFull lang={headerData.lang}/>
        </div>
    )
}