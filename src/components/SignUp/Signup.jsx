import React from 'react'

function Signup({handleSignup}) {
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleSignup();
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='shadow-lg px-16 w-full max-w-[450px] py-8 flex  flex-col'>
                <div className='my-2'>
                    <label htmlFor="" className='my-1'>Enter Name</label>
                    <input type="text" name="" id=""
                        className='w-full py-2 border-2 border-black px-4'
                    />
                </div>
                <div className='my-2'>
                    <label htmlFor="" className='my-1'>Contact</label>
                    <input type="text" name="" id=""
                        className='w-full py-2 border-2 border-black px-4'
                    />
                </div>
                <button className='bg-white px-6 py-2 my-4 border-2 border-black'>Sign Up</button>

                <a href=""
                 className='text-right'
                 >Login</a>
            </form>
        </div>
  )
}

export default Signup