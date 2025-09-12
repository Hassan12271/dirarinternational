import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Sigup from './Signup';
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans min-h-screen bg-gray-100 flex flex-col justify-between">
            <Header />
            <section className="max-w-full w-full p-2 flex justify-center gap-6 items-center">
                <div><Sigup /></div>
                <div><Login /></div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
