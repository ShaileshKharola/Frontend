import productModel from "../models/productModel.js"
import {v2 as cloudinary} from "cloudinary"
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Fix typos: "iamge" => "image"
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images=[image1,image2, image3, image4].filter((item)=>item!==undefined)
    let imagesUrl=await Promise.all(
        images.map(async(item)=>{
        let result =await cloudinary.uploader.upload(item.path,{resource_type:'image'});
        return result.secure_url
      })
    )

    const productData={
      name, description, price:Number(price), category, subCategory, sizes: JSON.parse(sizes), bestseller: bestseller === "true",
      image:imagesUrl,
      date:Date.now()
    }
    console.log(productData)
    const product = new productModel(productData)
    await product.save({success:true,message:"Product Added"})
    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}
const listProducts=async(req,res)=>{
    try {
      const products=await productModel.find({});
      res.json({success:true,products})
      
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
const removeProduct=async(req,res)=>{
  try {
    await productModel.findByIdAndDelete(req.params.id)
    res.json({success:true,message:"Product Removed"})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}
const singleProduct=async(req,res)=>{

}
export { addProduct, listProducts, removeProduct, singleProduct };