import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { MyContext } from '../context/context';
const Profile = () => {
    let { logged, setLogged } = useContext(MyContext);
    let [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            let token = localStorage.getItem("token");
            let response = await fetch("http://localhost:3000/users", {
                headers: {
                    authorization: token
                }
            });
            let Data = await response.json();
            setUser(Data);
        };

        fetchUser();
    }, []);

    return (
        <>

            {/* <div className='h-[91vh] flex flex-col'>
                <div className="info flex flex-col ml-2">
                    <h1 className='text-4xl'>Your Profile</h1>
                    <span>Name: {user.username}</span>
                    <span>Email: {user.email}</span>
                    <span>City: {user.city}</span>
                    <span>State: {user.state}</span>
                </div>
                <button onClick={() => {
                    localStorage.removeItem("token")
                    
                    navigate("/");
                }} className='bg-red-500 text-white rounded-3xl cursor-pointer px-5  py-2.5 w-[140px]'>Log-Out</button>
            </div> */}
            <div className="h-[91vh] bg-gray-50 flex items-center justify-center">
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[480px]">
        {/* Top Section - Blank Avatar + Name/Email */}
        <div className="flex flex-col items-center py-6 border-b">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                {/* Simple user icon (you can replace this with an <svg> if you want) */}
                <span className="text-gray-500 text-4xl">👤</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-3">{user.username || 'User Name'}</h2>
            <p className="text-gray-500 text-sm">{user.email || 'user@example.com'}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-4">
            <div className="flex justify-between">
                <span className="text-gray-600 font-medium">City</span>
                <span className="text-gray-800">{user.city || '-'}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600 font-medium">State</span>
                <span className="text-gray-800">{user.state || '-'}</span>
            </div>
        </div>

        {/* Action Button */}
        <div className="p-6 border-t flex justify-center">
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition"
            >
                Log Out
            </button>
        </div>
    </div>
</div>



        </>
    )
}

export default Profile

