import { useState } from 'react'
import SignUp from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx'
import Profile from './components/Profile.jsx'
import Buses from './components/Buses.jsx'
import Trains from './components/Trains.jsx'
import Flights from './components/Flights.jsx'
import Hotels from './components/Hotels.jsx'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import Loading from './components/Loading'
import 'nprogress/nprogress.css';
import { MyContext } from './context/context.js'


function App() {
  let [logged, setLogged] = useState(false);
  let [menu, setMenu] = useState(false);
  return (
    <div>
      <MyContext.Provider value={{logged,setLogged,menu,setMenu}}>
        <NavBar />
        <Routes>
          <Route path='/buses' element={<Buses />} />
          <Route path='/trains' element={<Trains />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
        <div>Page conten</div>
      </MyContext.Provider>

    </div>
  )
}

export default App
