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

function App({ state }) {
  return (
    <div className="App">
      <Header headerData={state.HeaderData} />
      <FirstComponent mobileNav={state.HeaderData.mobileNavItems} />
      <SecondComponent componentData={state.SecondComponentData.itemsData} />
      <ThirdComponent componentData={state.ThirdComponentData} />
      <FourthComponent componentData={state.FourthComponentData} />
      <FifthComponent componentData={state.FifthComponentData} />
      <SixthComponent componentData={state.SixthComponentData} />
      <SeventhComponent componentData={state.SeventhComponentData} />
      <Footer />
    </div>
  );
}

export default App;
