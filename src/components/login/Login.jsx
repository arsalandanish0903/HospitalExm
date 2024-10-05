import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiSimplelogin } from "react-icons/si";
import { FaHospitalUser } from "react-icons/fa6";

function Login({ handleLogin }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [umidCard, setUmidCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: 'url("https://pittcc.edu/wp-content/uploads/2023/02/Healthcare-Management-Technology-Background.jpg")' }}>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className="border-2   border-white shadow-lg px-10 py-8 w-full max-w-[450px] rounded-lg flex flex-col"
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <SiSimplelogin className="text-8xl text-white" />
        </div>

        {/* Name Input */}
        <div className="my-4">
          <label htmlFor="name" className="block mb-2 text-white">Enter Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none  text-gray-900"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Contact Input */}
        <div className="my-4">
          <label htmlFor="contact" className="block mb-2 text-white">Contact</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none  text-gray-900"
            placeholder="Enter contact number"
            required
          />
        </div>

        {/* UMID Card Input */}
        <div className="my-4">
          <label htmlFor="umidCard" className="block mb-2 text-white">UMID Card</label>
          <input
            type="text"
            id="umidCard"
            value={umidCard}
            onChange={(e) => setUmidCard(e.target.value)}
            className="w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none  text-gray-900"
            placeholder="Enter UMID Card"
            required
          />
        </div>

        {/* Login Button */}
        <button 
          type="submit" 
          className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <NavLink to="/signup" className="mt-4 text-right text-blue-300 hover:text-blue-500 underline">
          Sign Up
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
