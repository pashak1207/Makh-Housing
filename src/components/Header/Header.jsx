import { LangQuote } from "./LangQuote/LangQuote";
import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";
import "./Header.css";

export function Header({ lang, options, setLang, headerData }) {
  return (
    <header className="header">
      <div className="wrapper">
        <Logo />
        {window.screen.width > 992 && <Nav navItems={headerData.navItems} />}
        <LangQuote
          lang={lang}
          setLang={setLang}
          headerData={headerData}
          options={options}
        />
      </div>
    </header>
  );
}
