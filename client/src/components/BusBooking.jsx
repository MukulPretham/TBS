import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const BusBooking = () => {
    let params = useParams();
    console.log(params)
    let[bus,setBus] = useState({});
    useEffect(()=>{
        async function FetchData() {
            let response = await fetch(`http://localhost:3001/buses/bookings/${params["_id"]}`)
            let Data = await response.json();
            setBus(Data);
        }
        FetchData();
    })
  const busDetails = {
    busNumber: 'KA-05-1234',
    from: 'Bangalore',
    to: 'Chennai',
    price: '₹1200',
    duration: '6 hours',
    departTime: '10:00 AM',
    availableSeats: 25,
    totalSeats: 40
  }

  return (
    <div className="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Bus Booking Details</h2>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Bus No:</span>{bus._id}</p>
        <p><span className="font-semibold">From:</span> {bus.fromAddress}</p>
        <p><span className="font-semibold">To:</span> {bus.toAddress}</p>
        <p><span className="font-semibold">Price:</span> {bus.fare} INR</p>
        <p><span className="font-semibold">Duration:</span> {bus.duration} mins</p>
        <p><span className="font-semibold">Departure Time:</span> {bus.time} IST</p>
        <p><span className="font-semibold">Available Seats:</span> {bus.Available_Seats}</p>
        <p><span className="font-semibold">Total Seats:</span> {bus.Total_Seats}</p>
      </div>
      <button className="mt-6 w-[170px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  )
}

export default BusBooking
