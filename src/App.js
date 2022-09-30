import './App.css'
import { Header } from './components/Header/Header'
import React from "react"
import { FirstComponent } from './components/FirstComponent/FirstComponent'
import { SecondComponent } from "./components/SecondComponent/SecondComponent"
import { ThirdComponent } from './components/ThirdComponent/ThirdComponent'

function App({state}) {
  return (
    <div className="App">
      <Header headerData={state.HeaderData}/>
      <FirstComponent mobileNav={state.HeaderData.mobileNavItems}/>
      <SecondComponent componentData={state.SecondComponentData.itemsData}/>
      <ThirdComponent componentData={state.ThirdComponentData}/>
    </div>
  )
}

export default App
