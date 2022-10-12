import "./App.css";
import { Header } from "./components/Header/Header";
import React from "react";
import { FirstComponent } from "./components/FirstComponent/FirstComponent";
import { SecondComponent } from "./components/SecondComponent/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent/ThirdComponent";
import { FourthComponent } from "./components/FourthComponent/FourthComponent";
import { FifthComponent } from "./components/FifthComponent/FifthComponent";
import { SixthComponent } from "./components/SixthComponent/SixthComponent";

function App({ state, slidersCount }) {
  return (
    <div className="App">
      <Header headerData={state.HeaderData} />
      <FirstComponent mobileNav={state.HeaderData.mobileNavItems} />
      <SecondComponent componentData={state.SecondComponentData.itemsData} />
      <ThirdComponent componentData={state.ThirdComponentData} />
      <FourthComponent componentData={state.FourthComponentData} />
      <FifthComponent componentData={state.FifthComponentData} />
      <SixthComponent componentData={state.SixthComponentData} />
    </div>
  );
}

export default App;
