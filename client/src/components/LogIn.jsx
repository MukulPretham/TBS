import React from 'react'
import NavBar from './NavBar'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
const LogIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let onSubmit = (data)=>{
        console.log(data)
    }
    return (
        <>
            <NavBar />
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
                </form>
            </div>
        </>
    )
}

export default LogIn
