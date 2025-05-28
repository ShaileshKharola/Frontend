import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
        <div><img src={assets.logo} className='mb-5 w-32' alt=""/>
        <p className='w-full md:w-2/3 text-gray-600'>Your trusted source for the latest trends in fashion.</p></div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p><ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICE</li>
            </ul>
            </div>
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Email: shaileshkharola@gmail.com</li>
                <li>Phone: 9756848533</li>
            </ul>
      </div>
    </div>
    <div className='text-center text-gray-600 text-xs mt-10'>
      <p>© 2025 Shailesh Kharola. All rights reserved.</p>
      <p>Designed by Shailesh Kharola</p>
    </div>
    </div>
  )
}

export default Footer
