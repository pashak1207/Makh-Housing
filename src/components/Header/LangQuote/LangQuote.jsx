import ButtonLines from "./../../../img/header/icons/menu_lines.svg";
import { Lang } from "./Lang/Lang";
import { Quote } from "./Quote/Quote";
import React, { useState } from "react";
import "./LangQuote.css";
import { MobileMenu } from "../../MobileMenu/MobileMenu";

export function LangQuote({ lang, options, setLang, headerData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  function openMobileMenu() {
    setIsMenuOpen(true);
  }

  return (
    <div className="lang-quote">
      {window.screen.width > 992 && (
        <Lang options={options} lang={lang} setLang={setLang} />
      )}
      <Quote />
      {window.screen.width <= 992 && (
        <button onClick={openMobileMenu}>
          <img src={ButtonLines} alt="" />
        </button>
      )}
      {
        <MobileMenu
          headerData={headerData}
          isOpen={isMenuOpen}
          closeMobileMenu={closeMobileMenu}
          options={options}
          lang={lang}
          setLang={setLang}
        />
      }
    </div>
  );
}
