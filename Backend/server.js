import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './route/userRoute.js';
import productRouter from './route/productRoute.js';
//test app config
const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()
// Middleware
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.get('/', (req, res) => {
  res.send('API Working');
})
app.listen(port, () => console.log('Server is running on port: ' + port));
