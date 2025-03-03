import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <>
            <div className='z-0 h-[150vh] flex flex-col'>
                <div className="bg-no-repeat  bg-cover bg-center bg-[url('')] bg-blue-50 py-30 px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore the World with Ease</h2>
                    <p className="text-gray-600 ma x-w-2xl mx-auto">
                        Welcome to Our website, your ultimate companion for seamless and comfortable bus travel. Whether you’re planning a quick getaway, a cross-country adventure, or a daily commute, we’ve got you covered with reliable routes, affordable fares, and modern, comfortable buses.

                        Discover convenient booking, live tracking, and customer-friendly services — all in one place. Travel smarter, safer, and stress-free with us!
                    </p>
                    <NavLink to="/buses"><button className="cursor-pointer mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition">
                        Get Started
                    </button></NavLink>

                </div>
                <div className="bg-no-repeat bg-cover bg-center bg-[url('')] bg-green-50 py-30 px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Journey Beyond Tracks</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Experience the joy of train travel like never before. Whether you are setting off on a scenic adventure, commuting to work, or visiting loved ones across cities, find comfort and convenience every step of the way. Enjoy hassle-free booking, real-time updates, and comfortable seating designed for all types of travelers.
                        With extensive routes connecting popular destinations and hidden gems, train journeys become more than just travel — they become stories. Sit back, relax, and watch the world unfold outside your window as you travel smarter, safer, and more comfortably.
                    </p>
                    <NavLink to="/trains"><button className="cursor-pointer mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition">
                        Book Your Ticket
                    </button></NavLink>

                </div>
                <div className="bg-no-repeat bg-cover bg-center bg-[url('')] bg-amber-50 py-30 px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Fly to Your Next Adventure</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take off to new horizons and discover exciting destinations with speed and comfort. Whether it’s a quick getaway or a long-awaited vacation, flying connects you effortlessly.
                        With smooth booking, flexible flight options, and onboard comforts designed for every traveler, your journey begins the moment you step on board.
                    </p>
                    <NavLink to="flights">
                        <button className="cursor-pointer mt-6 bg-amber-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-amber-700 transition">
                            Book Your Flight
                        </button>
                    </NavLink>

                </div>
                <div className="bg-no-repeat bg-cover bg-center bg-sky-50 py-30 px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Where Comfort Meets Luxury</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Find the perfect stay for every journey — from cozy rooms with scenic views to luxurious suites with world-class amenities. Whether it's a weekend retreat or a long vacation, the right hotel turns every trip into a memory.
                        With flexible booking, personalized options, and stays designed for comfort, every hotel becomes your home away from home.
                    </p>
                    <NavLink to="/hotels">
                        <button className="cursor-pointer mt-6 bg-sky-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-sky-500 transition shadow-sm">
                            Book Your Stay
                        </button>
                    </NavLink>
                </div>

                <footer className="bg-blue-50 text-gray-700 py-10 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">About Us</h3>
                            <p className="text-sm leading-relaxed">
                                We believe every journey should be simple, comfortable, and memorable. From quick getaways to long adventures, we are here to enhance your travel experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Destinations</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Bookings</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-600 transition">FAQs</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-600 border-t border-gray-200 pt-6">
                        © 2025 YourCompany. All Rights Reserved.
                    </div>
                </footer>


            </div>
        </>
    )
}

export default Home
