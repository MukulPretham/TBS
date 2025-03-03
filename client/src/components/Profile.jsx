import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router';
const Profile = () => {
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
            <NavBar />
            <div className='h-[91vh] flex flex-col'>
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
            </div>
        </>
    )
}

export default Profile
