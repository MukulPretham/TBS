import { set } from 'nprogress';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
const BusBooking = () => {
  let params = useParams();
  console.log(params)
  let [bus, setBus] = useState({});
  let [seatLayout, setSeatLayout] = useState([]);
  useEffect(() => {
    async function FetchData() {
      console.log(params);
      let response = await fetch(`http://localhost:3001/buses/bookings/${params["_id"]}`);
      let Data = await response.json();
      setBus(Data);
      setSeatLayout(Data.seatLayout);
    }
    FetchData();
  }, []);

  let seatClickHandler = (e) => {
    let bgColor = getComputedStyle(e.target).backgroundColor;

    if (bgColor === "rgb(255, 255, 255)") {  // white in RGB
      e.target.style.backgroundColor = "blue"; // change via inline style
    } else {
      e.target.style.backgroundColor = "white";
    }
  }

  let Ref = useRef();

  let bookSeats = () => {
    let elements = Ref.current.children;
    let bookedNumbers =[];
    let seatsSelected = 0;
    let layout = [];
    for (let i = 1; i <= 40; i++) {
      if (getComputedStyle(elements[i - 1]).backgroundColor === "rgb(255, 255, 255)") {
        layout[i - 1] = true;
      } else if (getComputedStyle(elements[i - 1]).backgroundColor === "rgb(0, 0, 255)") { // Selected (Blue)
        seatsSelected++;
        bookedNumbers.push(elements[i-1].innerHTML)
        layout[i - 1] = false;
      }
      else {
        layout[i - 1] = false;
      }
    }
    console.log(layout);
    async function updateSeats() {
      // let response = await fetch(`http://localhost:3001/buses/bookSeat/${bus._id}`, {
      //   method: "POST",
      //   body: JSON.stringify({ seatLayout: layout }),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      // console.log(await response.json());
      let response = await fetch(`http://localhost:3000/book?busID=${bus._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          seatsSelected: seatsSelected,
          seatLayout: layout,
          bookedSeats: bookedNumbers
        })
      });
      console.log(await response.json());
    }
    updateSeats();
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
      <div ref={Ref} className="layout border-2 border-black h-[300px] w-[800px] flex-wrap flex justify-center items-center">
        {seatLayout.map((seat, index) => (seat ? <div onClick={seatClickHandler} className="bg-white seat h-[72px] w-[78px] border-2 border-black">{index + 1}

        </div> : <div className="bg-gray-500 seat h-[72px] w-[78px] border-2 border-black">

        </div>))}
      </div>
      <button onClick={bookSeats} className="mt-6 w-[170px] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  )
}

export default BusBooking
