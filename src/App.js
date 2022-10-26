import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { FirstComponent } from "./components/FirstComponent/FirstComponent";
import { SecondComponent } from "./components/SecondComponent/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent/ThirdComponent";
import { FourthComponent } from "./components/FourthComponent/FourthComponent";
import { FifthComponent } from "./components/FifthComponent/FifthComponent";
import { SixthComponent } from "./components/SixthComponent/SixthComponent";
import { SeventhComponent } from "./components/SeventhComponent/SeventhComponent";
import { Footer } from "./components/Footer/Footer";
import { PageUp } from "./components/PageUp/PageUp";
import { NewPageComponent } from "./components/NewPageComponent/NewPageComponent";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App({ stateEn, stateUa, options }) {
  const [scroll, setScroll] = useState(window.scrollY);

  const [lang, setLang] = useState(options[0]);

  const newPages = [
    <Route
      key={1}
      path={"/about"}
      element={<NewPageComponent page={"about"} />}
    />,
    <Route
      key={2}
      path={"/services"}
      element={<NewPageComponent page={"services"} />}
    />,
    <Route
      key={3}
      path={"/projects"}
      element={<NewPageComponent page={"projects"} />}
    />,
    <Route
      key={4}
      path={"/contact"}
      element={<NewPageComponent page={"contact"} />}
    />,
  ];

  const state =
    lang.value === "en" ? stateEn : lang.value === "ua" ? stateUa : stateEn;

  function eventScroll() {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        lang={lang}
        setLang={setLang}
        options={options}
        headerData={state.HeaderData}
      />
      <Routes>{newPages}</Routes>
      <FirstComponent mobileNav={state.HeaderData.mobileNavItems} />
      <SecondComponent componentData={state.SecondComponentData.itemsData} />
      <ThirdComponent componentData={state.ThirdComponentData} />
      <FourthComponent componentData={state.FourthComponentData} />
      <FifthComponent componentData={state.FifthComponentData} />
      <SixthComponent componentData={state.SixthComponentData} />
      <SeventhComponent componentData={state.SeventhComponentData} />
      <Footer
        options={options}
        lang={lang}
        setLang={setLang}
        componentData={state.FooterData}
      />
      {window.screen.width > 992 && scroll > 500 && <PageUp />}
    </div>
  );
}

export default App;
