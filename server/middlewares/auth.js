
// it will check userid and if the user has premium

import { clerkClient } from "@clerk/express";

export const auth = async(req , res, next)=>{
    try{
        // const{userId,has} = await req.auth();


        // i have added this


        const authData = await req.auth(); // ✅ First store it
console.log('Auth Data:', authData); // ✅ Now you can log it
console.log('User ID:', authData.userId); // ✅ Now this works

const {userId, has} = authData; // ✅ Then destructure





        const hasPremiumPlan = await has({plan:'premium' });

        const user = await clerkClient.users.getUser(userId);
        if(!hasPremiumPlan && user.privateMetadata.free_usage){
            req.free_usage = user.privateMetadata.free_usage
        }
        else{
            await clerkClient.users.updateUserMetadata(userId ,{
                privateMetadata:{
                    free_usage: 0
                }
            })
            req.free_usage=0;
        }


                // added this
                req.userId = userId; // 👈 ADD THIS - attach userId to req




        req.plan = hasPremiumPlan ? 'premium' :'free';
        next()
    }
        catch(error){
            res.json({success : false ,message : error.message })
        
    }   
}