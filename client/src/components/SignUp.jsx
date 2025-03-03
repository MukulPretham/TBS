import React from 'react'
import NavBar from './NavBar'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();

    let onSubmit = async (data) => {
        nProgress.start();
        try {
            let currUsername = data["username"];
            let currEmail = data["email"];
            let currPassword = data["password"];
            let currCity = data["city"];
            let currState = data["state"];
            // console.log(currUsername);
            let response = await fetch("http://localhost:3000/signIn",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: currUsername,
                        email: currEmail,
                        city: currCity,
                        state: currState,
                        password: currPassword
                    })
                }
            )
            let Data = await response.json();
            if (response.status === 409) {
                return setError("username", { message: Data.message });
            }
            console.log(Data);
            navigate("/LogIn");
        } finally {
            nProgress.done();
        }

    }

    return (
        <>
            
            <div className='h-[91vh] flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-3.5 rounded-4xl bg-slate-100 w-[98%] h-[60vh] md:w-[40%]'>
                    <h1 className='text-4xl'>Create a new Account</h1>
                    {errors.username && <span className='text-[14px] text-red-500'>{errors.username.message}</span>}
                    <input {...register("username",
                        { required: "username required", minLength: { value: 12, message: "minimum 12 charecters of username required" } })} type="text" className='w-[60%] border-1 border-black px-1' placeholder='username' />
                    {errors.email && <span className='text-[14px] text-red-500'>invalid email</span>}
                    <input {...register("email",
                        { required: "email required" })} type="email" className='w-[60%] border-1 border-black px-1' placeholder='E-mail' />
                    {errors.city && <span className='text-[14px] text-red-500'>{errors.city.message}</span>}
                    <input {...register("city",
                        { required: "city required" })} type="text" className='w-[60%] border-1 border-black px-1' placeholder='your city' />
                    {errors.state && <span className='text-[14px] text-red-500'>{errors.state.message}</span>}
                    <input {...register("state",
                        { required: "state required" })} type="text" className='w-[60%] border-1 border-black px-1' placeholder='your state' />
                    {errors.password && <span className='text-[14px] text-red-500'>{errors.password.message}</span>}
                    <input {...register("password",
                        { required: "password required", minLength: { value: 8, message: "minimum 8 charecters of password required" } })} type="password" className='w-[60%] border-1 border-black px-1' placeholder='password' />
                    <input className='bg-red-600 text-white rounded-2xl w-[20%] border-2 border-black py-1' type="submit" value="Submit" />
                    <span>already have a account? <NavLink to="/LogIn">LogIn</NavLink> </span>
                </form>
            </div>
        </>
    )
}

export default SignUp
