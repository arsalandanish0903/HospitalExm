import React, { useState } from 'react';
import {Navigate, NavLink, useNavigate} from 'react-router-dom'
import { FaHospitalUser } from "react-icons/fa6";

function Login({ handleLogin }) {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [umidCard, setUmidCard] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation or authentication here
        // If successful, call handleLogin to update the login state
        handleLogin();
    };
    return (
        <div className='w-full h-screen  flex items-center justify-center' style={{backgroundImage: 'url("https://pittcc.edu/wp-content/uploads/2023/02/Healthcare-Management-Technology-Background.jpg")',
            objectFit: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
        }}>
            <form onSubmit={handleSubmit} className='shadow-lg px-16 w-full max-w-[450px] py-8 flex flex-col'>
                <div className='flex items-center justify-center'>
                <FaHospitalUser 
                className='text-8xl text-white'
                />
                </div>
                <div className='my-2'>
                    <label htmlFor="name" className='my-1 text-white'>Enter Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full py-2 border-2 border-black border-none focus:outline-none rounded-md px-4'
                        placeholder='Enter Name'
                    />
                </div>
                <div className='my-2'>
                    <label htmlFor="contact" className='my-1 text-white'>Contact</label>
                    <input 
                        type="text" 
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className='w-full py-2 border-2 border-black border-none focus:outline-none rounded-md px-4'
                        placeholder='Enter Contact No'
                    />
                </div>
                <div className='my-2'>
                    <label htmlFor="umidCard" className='my-1 text-white'>Umid Card</label>
                    <input 
                        type="text" 
                        id="umidCard"
                        value={umidCard}
                        onChange={(e) => setUmidCard(e.target.value)}
                        className='w-full py-2 border-2 border-black border-none focus:outline-none rounded-md px-4'
                        placeholder='Enter Umi'
                    />
                </div>

                <button type="submit" className='text-white px-6 py-2 my-4 bg-blue-700 border-none focus:outline-none rounded-md'>
                    Login
                </button>

                <NavLink to='/signup' className='text-right text-blue-700 underline'>Sign Up</NavLink>
            </form>
        </div>
    );
}

export default Login;
