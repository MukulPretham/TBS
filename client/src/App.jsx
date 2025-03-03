import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Loading from './components/Loading'
import 'nprogress/nprogress.css';


function App() {

  return (
    <div>
      <NavBar/>
      <div>Page conten</div>
    </div> 
  )
}

export default App
