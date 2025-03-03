import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUp from './components/SignUp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LogIn from './components/LogIn.jsx'
import Profile from './components/Profile.jsx'
import Buses from './components/Buses.jsx'
import Trains from './components/Trains.jsx'
import Flights from './components/Flights.jsx'
import Hotels from './components/Hotels.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
