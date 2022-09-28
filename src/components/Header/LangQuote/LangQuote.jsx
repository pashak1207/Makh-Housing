import ButtonLines from "./../../../img/header/icons/menu_lines.svg"
import { Lang } from "./Lang/Lang";
import { Quote } from "./Quote/Quote";
import React, { useState } from "react"
import "./LangQuote.css"
import { MobileMenu } from "../../MobileMenu/MobileMenu";

export function LangQuote({headerData}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMobileMenu(){
    setIsMenuOpen(false)
  }

  function openMobileMenu(){
    setIsMenuOpen(true)
  }

  return (
    <div className="lang-quote">
      {window.screen.width > 992 && 
          <Lang lang={headerData.lang}/>
       }
      <Quote/>
      {window.screen.width <= 992 && 
          <button onClick={openMobileMenu}><img src={ButtonLines} alt="" /></button>
       }
      {<MobileMenu headerData={headerData} isOpen={isMenuOpen} closeMobileMenu={closeMobileMenu}/>}
    </div>
  );
}
