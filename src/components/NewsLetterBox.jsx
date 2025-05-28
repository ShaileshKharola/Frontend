import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Suscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Subscribe to our newsletter and get the latest updates.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border p1-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-gray-800 text-white px-4 py-2 sm:ml-2 mt-3 sm:mt-0' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
