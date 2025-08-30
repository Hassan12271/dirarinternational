import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans min-h-screen bg-gray-100 flex flex-col justify-between">
            <Header />
            <section className="max-w-3xl mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Explore the World with Us</h2>
                <p className="mb-6">
                    Discover amazing destinations, exclusive deals, and personalized travel experiences.
                    Whether you're planning a family vacation, a romantic getaway, or a business trip, our expert team is here to help.
                </p>
                <ul className="mb-8 list-disc pl-6 space-y-2">
                    <li>Tailor-made holiday packages</li>
                    <li>Flight and hotel bookings</li>
                    <li>Visa assistance</li>
                    <li>24/7 customer support</li>
                </ul>
                <Link to="/signup" className="no-underline text-white cursor-pointer">
                <button
                    className="mt-4 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition font-medium cursor-pointer"
                >
                    
                        Get Started
                    
                </button>
                </Link>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
