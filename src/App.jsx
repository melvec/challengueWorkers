import { useState } from 'react'
import JobDetail from './components/JobDetail'

import './App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <div>


 <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<JobDetail />} />
         
          
          {/* <Route path="/detail/:id" element={<Detail />} /> */}
        </Routes>
      </div>
      </div>
      
    </>
  )
}

export default App
