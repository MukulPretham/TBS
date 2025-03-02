import React, { useState } from 'react'

const NavBar = () => {
    let [logged, setLogged] = useState(false);
    let[menu,setMenu] = useState(false);
    return (
        <nav className='h-[50px] md:h-[12vh] border border-black flex items-center justify-between'>
            <button className='block md:hidden'>Memu</button>

            <div className="menu">
            <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>Home</li>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>About Us</li>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>Contact Us</li>
            </ol>
            </div>

            <ol className='hidden md:flex ml-5 items-center gap-2.5'>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>Home</li>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>About Us</li>
                <li className='hover:bg-red-600 hover:text-white cursor-pointer border-1 border-red-600 p-2.5 rounded-2xl'>Contact Us</li>
            </ol>
            <div className="authButtons mr-1.5 flex gap-1.5">
                <button className='rounded-3xl cursor-pointer border-1 border-black p-2'>SignIn</button>
                <button className='rounded-3xl cursor-pointer border-1 border-black p-2'>LogIn</button>
            </div>
        </nav>
    )
}

export default NavBar
