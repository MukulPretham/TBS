import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Profile = () => {
    let [user, setUser] = useState({});
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
            <div className='h-[91vh] flex flex-col border-2'>
                <h1 className='text-4xl'>Your Profile</h1>
                <span>Name: {user.username}</span>
                <span>Email: {user.email}</span>
                <span>City: {user.city}</span>
                <span>State: {user.state}</span>
            </div>
        </>
    )
}

export default Profile
