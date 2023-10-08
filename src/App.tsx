import React, {  } from "react"
import { Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import SendEmail from "./pages/SendEmail"
import Navbar from "./components/Navbar"


const App: React.FC = () => {


  return (
    <div className="app">

      <Navbar />
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/email" element={<SendEmail />} />
    </Routes>

    </div>
  )
}

export default App
