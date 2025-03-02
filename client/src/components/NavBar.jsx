import React, { useState } from 'react'
import { NavLink } from 'react-router';
const NavBar = () => {
    let [logged, setLogged] = useState(false);
    let [menu, setMenu] = useState(false);
    return (
        <div className='sticky top-0'>
            <nav className='sticky top-0 h-[50px] md:h-[9vh] border border-black flex items-center justify-between w-[100vw]'>
                <button onClick={() => setMenu(!menu)} className='block md:hidden text-3xl'>☰</button>

                <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                    <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>About</NavLink>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Contacts</NavLink>
                    </ol>

                </ol>
                <div className="authButtons mr-1.5 flex gap-1.5">
                    <NavLink to="/SignUp"><button className='text-black bg-slate-300 rounded-3xl r p-2.5'>SignUp</button></NavLink>
                    <NavLink to="/LogIn"><button className='bg-red-500 text-white rounded-3xl cursor-pointer px-5  py-2.5'>LogIn</button></NavLink>
                </div>
            </nav>
            {menu && <div><ol className='bg-slate-200 w-[100vw] absolute flex flex-col gap-2.5'>
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>About</NavLink>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? "bg-red-600 text-white p-2.5 rounded-3xl" : "p-2.5 rounded-3xl"}>Contacts</NavLink>
            </ol></div>}
        </div>
    )
}

export default NavBar
