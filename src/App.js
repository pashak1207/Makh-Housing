import './App.css'
import { Header } from './components/Header/Header'
import React from "react"
import { FirstComponent } from './components/FirstComponent/FirstComponent'
import { SecondComponent } from "./components/SecondComponent/SecondComponent"

function App({state}) {
  return (
    <div className="App">
      <Header headerData={state.HeaderData}/>
      <FirstComponent mobileNav={state.HeaderData.mobileNavItems}/>
      <SecondComponent componentData={state.SecondComponentData.itemsData}/>
    </div>
  )
}

export default App
