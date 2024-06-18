import React from 'react'
import NavBar from './Components/NavBar'
import MainBody from './Components/MainBody'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
   <>
   <BrowserRouter>      
   <NavBar/>
   <MainBody/>
    </BrowserRouter>


   </>
  )
}

export default App