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
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/buses' element={<Buses/>} />
        <Route path='/trains' element={<Trains/>} />
        <Route path='/flights' element={<Flights/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
