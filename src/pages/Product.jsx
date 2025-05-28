import React, { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')
  const [size,setSize]=useState('')
  const fetchProductData = async() => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);  
        console.log(item);
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
            productData.image.map((item,index) => (
              <button
                type="button"
                key={item}
                onClick={() => setImage(item)}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer p-0 border-none bg-transparent'
                aria-label="Select product image"
              >
                <img src={item} alt="Product thumbnail" className='w-full h-auto' />
              </button>
            ))}
      </div>
      <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt=""/>
      </div>
      </div>
      {/*product info */}
      <div className='flex-1'>
        <h1 className='font-medium text-2x1 mt-2'>{productData.name}</h1>
        <div className='flex item-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="" className="w-3-5"/>
          <img src={assets.star_icon} alt="" className="w-3-5"/>
          <img src={assets.star_icon} alt="" className="w-3-5"/>
          <img src={assets.star_icon} alt="" className="w-3-5"/>
          <img src={assets.star_dull_icon} alt="" className="w-3-5"/>
            <p className='p1-2'>(122)</p>
        </div>
        <p className='mt-5 text-3x1 font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select.Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
                <button className={`border py-2 px-4 bg-gray-100 ${item===size ? 'bg-orange-500': ''}`} key={index} onClick={()=>setSize(item)}>{item}</button>
            ))}
            </div>
        </div>
        </div>
    </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
