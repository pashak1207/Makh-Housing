import './App.css'
import { Header } from './components/Header/Header'
import React from "react"


function App({state}) {
  return (
    <div className="App">
      <Header headerData={state.HeaderData}/>
    </div>
  )
}

export default App
