import React from 'react'
import NavBar from './NavBar'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const LogIn = () => {
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();
    let onSubmit = async (data) => {
        nProgress.start();
        try {
            let currUsername = data["username"];
            let currPassword = data["password"];
            let response = await fetch("http://localhost:3000/logIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: currUsername,
                    password: currPassword
                })
            })
            let Data = await response.json();
            if (response.status === 404) {
                return setError("username", { message: Data.message });

            } else {
                localStorage.setItem("token", Data["token"]);
                navigate("/");
            }
        }finally{
            nProgress.done();
        }
    }
    return (
        <>
            
            <div className='h-[91vh] flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-3.5 rounded-4xl bg-slate-100 w-[98%] h-[60vh] md:w-[40%]'>
                    <h1 className='text-4xl'>Log-In</h1>
                    {errors.username && <span className='text-[14px] text-red-500'>{errors.username.message}</span>}
                    <input {...register("username",
                        { required: "username required", minLength: { value: 12, message: "minimum 12 charecters of username required" } })} type="text" className='w-[60%] border-1 border-black px-1' placeholder='username' />
                    {errors.password && <span className='text-[14px] text-red-500'>{errors.password.message}</span>}
                    <input {...register("password",
                        { required: "password required", minLength: { value: 8, message: "minimum 8 charecters of password required" } })} type="password" className='w-[60%] border-1 border-black px-1' placeholder='password' />
                    <input className='bg-red-600 text-white rounded-2xl w-[20%] border-2 border-black py-1' type="submit" value="Submit" />
                    <span>Don't have an account ? <NavLink to="/SignUp">Sign-Up</NavLink></span>
                </form>
            </div>
        </>
    )
}

export default LogIn
