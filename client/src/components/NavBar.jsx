import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
const NavBar = () => {
    let navigate = useNavigate();
    let [logged, setLogged] = useState(false);
    let [menu, setMenu] = useState(false);

    //Checking for log status
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            setLogged(true);
        }
    }, [])

    return (
        <div className='sticky top-0'>
            <nav className='sticky top-0 h-[50px] md:h-[9vh] border border-black flex items-center justify-between w-[100vw]'>
                <button onClick={() => setMenu(!menu)} className='block md:hidden text-3xl'>☰</button>

                <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                    <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Home</NavLink>
                        <NavLink to="/buses" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Buses</NavLink>
                        <NavLink to="/trains" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Trains</NavLink>
                        <NavLink to="/flights" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Flights</NavLink>
                        <NavLink to="/hotels" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Hotels</NavLink>
                    </ol>

                </ol>
                <div className="nav-buttons">
                    {logged ? <div className="authButtons mr-1.5 flex gap-1.5">
                        <NavLink to="/Profile"><button className='text-black bg-slate-300 cursor-pointer rounded-3xl r p-2.5'>Profile</button></NavLink>
                        <button onClick={() => {
                            localStorage.removeItem("token")
                            setLogged(false);
                            navigate("/");
                        }} className='bg-red-500 text-white rounded-3xl cursor-pointer px-5  py-2.5'>Log-Out</button>
                    </div> : <div className="authButtons mr-1.5 flex gap-1.5">
                        <NavLink to="/SignUp"><button className='text-black bg-slate-300 rounded-3xl r p-2.5'>SignUp</button></NavLink>
                        <NavLink to="/LogIn"><button className='bg-red-500 text-white rounded-3xl cursor-pointer px-5  py-2.5'>LogIn</button></NavLink>
                    </div>}
                </div>

            </nav>
            {menu && <div><ol className='bg-slate-200 w-[100vw] absolute flex flex-col gap-2.5'>
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Home</NavLink>
                <NavLink to="/buses" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Buses</NavLink>
                <NavLink to="/trains" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Trains</NavLink>
                <NavLink to="/flights" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Flights</NavLink>
                <NavLink to="/hotels" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Hotels</NavLink>
            </ol></div>}
        </div>
    )
}

export default NavBar
