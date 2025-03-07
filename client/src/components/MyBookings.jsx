import React, { useEffect, useState } from 'react'

const MyBookings = () => {
    let [booking,setBooking]  = useState([]);
    //fetching user bookings
    useEffect(()=>{
        let token = localStorage.getItem("token")
        async function FetchData() {
            let response = await fetch("http://localhost:3000/getBookings",{
                headers: {
                    "authorization": token
                }
            });
            let Data = await response.json();
            console.log(Data);
            setBooking(Data);
        }
        FetchData();
    },[])

    return (
        <div className='w-[100vw] h-[100vh] flex-col items-center overflow-scroll'>
            {booking.map(booking => <div className="border rounded-xl mt-1 shadow-md p-4 bg-white h-[230px] w-[1440px] space-y-2">
                <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-base font-medium">{booking.from}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">To</p>
                    <p className="text-base font-medium">{booking.to}</p>
                </div>
                <div className="text-sm text-gray-600">
                    <p><span className="font-medium text-gray-800">Date:</span> {new Date(booking.date).toDateString()}</p>
                    <p><span className="font-medium text-gray-800">Time:</span> {booking.time}</p>
                    <p className="font-bold mt-1 text-gray-800">Paid : {booking.paid} INR</p>
                </div>
                <div>
                    <span>Seat numbers : {[booking.seatNumbers].map(seat => `${seat}`)} </span>
                </div>
            </div>)}
        </div>
    )
}

export default MyBookings
