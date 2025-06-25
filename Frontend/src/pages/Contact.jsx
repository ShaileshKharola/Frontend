import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox';
const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px' src={assets.contact_img} alt=""Contact Store Location"" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>30/3 Church Flat Char Dukan Landour Cantt<br/>Mussoorie,Dehradun-248179</p>
          <p className='text-gray-500'>Contact Us: 9756848533<br />Email: shaileshkharola0048@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>For job inquiries, please send your resume to careers@forever.com</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>      
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
