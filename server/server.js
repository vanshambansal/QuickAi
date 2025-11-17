import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';


const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// i have added this

app.use((req, res, next) => {
    console.log('Clerk Env Check:');
    console.log('PUBLISHABLE_KEY exists:', !!process.env.CLERK_PUBLISHABLE_KEY);
    console.log('SECRET_KEY exists:', !!process.env.CLERK_SECRET_KEY);
    console.log('SECRET_KEY starts with:', process.env.CLERK_SECRET_KEY?.substring(0, 10));
    next();
});

app.use((req, res, next) => {
    console.log('Headers:', req.headers);
    console.log('Authorization:', req.headers.authorization);
    next();
});



app.get('/',(req,res)=> res.send('Server is Live!') )


app.use(requireAuth())
app.use('/api/ai' , aiRouter)
app.use('/api/user' , userRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=> {
    console.log('server is running on port' , PORT);
})

