import React from 'react'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2x1 text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col ms:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col gap-6 justify-center md:2/4 text-gray-600'>
          <p>
            Welcome to our e-commerce platform, where convenience meets quality. We believe shopping should be simple, enjoyable, and accessible to everyone.
          </p>
          <p>
            To provide the best online shopping experience for our customers.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            We strive to offer a wide range of products at competitive prices, along with exceptional customer service. Our commitment is to deliver value, trust, and satisfaction with every order.
          </p>
          <p>
            Discover new trends, find your favorites, and enjoy a seamless shopping journey—all in one place.
          </p>
        </div>
      </div>
      <div className='text-4x1 py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure the highest quality standards for all our products, so you can shop with confidence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We provide a user-friendly shopping experience, making it easy to find and purchase your favorite products.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are committed to providing prompt and helpful support to ensure your satisfaction.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
