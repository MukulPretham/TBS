import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
const Buses = () => {
    const [Bus, setBus] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        const savedBuses = sessionStorage.getItem('buses');
        if (savedBuses) {
            setBus(JSON.parse(savedBuses));
        }
    }, [])
    let onSubmit = (data) => {
        let from = data.fromAddress;
        let to = data.toAddress;
        let date = data.date;
        async function FetchData() {

            try {
                let response = await fetch(`http://localhost:3001/buses?from=${data.fromAddress}&to=${data.toAddress}&date=${data.date}`,
                    {
                        method: "GET"
                    }
                )
                let Data = await response.json();
                console.log(Data);
                console.log(Data);
                setBus(Data);
                sessionStorage.setItem('buses', JSON.stringify(Data));
                console.log(Bus);
            } catch (error) {
                console.log("unexpected error occured");
            }

        }
        FetchData();
    }
    return (
        <>
            <div className='h-[91vh] flex flex-col overflow-scroll'>

                <form onSubmit={handleSubmit(onSubmit)} className="sm:flex-col md:flex-row items-center gap-2 p-4 bg-white shadow-lg rounded-2xl max-w-3xl mx-auto">
                    {errors.fromAddress && <span className='text-[14px] text-red-500'>{errors.fromAddress.message}</span>}
                    <input
                        {...register("fromAddress", { required: "Feild required" })}
                        type="text"
                        placeholder="From"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.toAddress && <span className='text-[14px] text-red-500'>{errors.toAddress.message}</span>}
                    <input
                        {...register("toAddress", { required: "Feild required" })}
                        type="text"
                        placeholder="To"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.date && <span className='text-[14px] text-red-500'>{errors.date.message}</span>}
                    <input
                        {...register("date", { required: "Feild required" })}
                        type="date"
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </form>



                {Bus.map(bus => <div className="h-[200px] bg-white shadow-md rounded-lg p-4 border border-gray-300 flex flex-col justify-between">
                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold text-gray-800">
                            From: <span className="text-blue-600">{bus.fromAddress}</span>
                        </h2>
                        <h2 className="text-lg font-semibold text-gray-800">
                            To: <span className="text-green-600">{bus.toAddress}</span>
                        </h2>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-gray-700">
                            Departure Time: <span className="font-medium">{bus.time}</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            Price: <span className="font-medium">₹{bus.fare}</span>
                        </p>
                    </div>
                    <NavLink to={`booking/${bus._id}`}>
                        <button className="w-[150px] mt-2 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                            Book Now
                        </button>
                    </NavLink>
                </div>)}


            </div>
        </>
    )
}

export default Buses
