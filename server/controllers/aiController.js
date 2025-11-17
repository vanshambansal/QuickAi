import OpenAI from "openai";
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";
import axios from "axios";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
// import pdf from 'pdf-parse/lib/pdf.js'

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY ,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const generateArticle = async(req , res)=>{

    // i have added this
    console.log('=== GENERATE ARTICLE CALLED ===');
    console.log('User ID:', req.userId); // ✅ Access from req directly
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);
    console.log('Free usage:', req.free_usage);


    try {

        // added this 

        const userId = req.userId; // ✅ Get from req
        // const {userId} = req.auth();


        const {prompt , length} = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if(plan != 'premium' && free_usage >=10){
            return res.json({success : false , message: "limit reached. upgrade to continue."})
        }

                console.log('About to call Gemini API...'); // 👈 ADD THIS




        const response = await AI.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        {
            role: "user",
            content: prompt ,
        },

    ],
    temperature : 0.7,
    max_tokens : length,
});


                console.log('Gemini API response received'); // 👈 ADD THIS
        console.log('Response:', response); // 👈 ADD THIS




    const content = response.choices[0].message.content


            console.log('Database insert successful'); // 👈 ADD THIS


    await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , ${prompt} , ${content}  , 'article' ) `;

    if(plan !== 'premium'){
        await clerkClient.users.updateUserMetadata(userId , {
            privateMetadata :{
                free_usage:free_usage +  1
            }
        })
    }

    res.json({success:true , content})



    }catch(error){

                console.log('ERROR CAUGHT:'); // 👈 ADD THIS


        console.log(error.message);

                console.log('Full error:', error); // 👈 ADD THIS


        res.json({
            success:false,
            message : error.message
        })
        

    }

}





export const generateBlogTitle = async(req , res)=>{

    // i have added this
    console.log('=== GENERATE ARTICLE CALLED ===');
    console.log('User ID:', req.userId); // ✅ Access from req directly
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);
    console.log('Free usage:', req.free_usage);


    try {

        // added this 

        const userId = req.userId; // ✅ Get from req
        // const {userId} = req.auth();


        const {prompt } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if(plan != 'premium' && free_usage >=10){
            return res.json({success : false , message: "limit reached. upgrade to continue."})
        }

                console.log('About to call Gemini API...'); // 👈 ADD THIS




        const response = await AI.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        {
            role: "user",
            content: prompt ,
        },

    ],
    temperature : 0.7,
    max_tokens : 100,
});


                console.log('Gemini API response received'); // 👈 ADD THIS
        console.log('Response:', response); // 👈 ADD THIS




    const content = response.choices[0].message.content


            console.log('Database insert successful'); // 👈 ADD THIS


    await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , ${prompt} , ${content}  , 'blog-title' ) `;

    if(plan !== 'premium'){
        await clerkClient.users.updateUserMetadata(userId , {
            privateMetadata :{
                free_usage:free_usage +  1
            }
        })
    }

    res.json({success:true , content})



    }catch(error){

                console.log('ERROR CAUGHT:'); // 👈 ADD THIS


        console.log(error.message);

                console.log('Full error:', error); // 👈 ADD THIS


        res.json({
            success:false,
            message : error.message
        })
        

    }

}







export const generateImage = async(req , res)=>{

    // i have added this
    console.log('=== GENERATE image CALLED ===');
    console.log('User ID:', req.userId); // ✅ Access from req directly
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);


    try {

        // added this 

        const userId = req.userId; // ✅ Get from req
        // const {userId} = req.auth();


        const {prompt , publish } = req.body;
        const plan = req.plan;

        if(plan != 'premium'){
            return res.json({success : false , message: "This feature is only available for premium subscriptions"})
        }

                console.log('About to call Gemini API...'); // 👈 ADD THIS

        const formData = new FormData()
        formData.append('prompt', prompt)

       const {data} =  await axios.post("https://clipdrop-api.co/text-to-image/v1" , formData , {
            headers: {'x-api-key': process.env.CLIPDROP_API_KEY ,},
            responseType: "arraybuffer",
        })


        const base64Image = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

        const {secure_url} = await cloudinary.uploader.upload(base64Image)


                console.log('Gemini API response received'); // 👈 ADD THIS






            console.log('Database insert successful'); // 👈 ADD THIS


    await sql` INSERT INTO creations (user_id, prompt ,content , type, publish ) VALUES (${userId} , ${prompt} , ${secure_url}  , 'image' , ${publish ?? false} ) `;

    

    res.json({success:true ,content: secure_url})



    }catch(error){

                console.log('ERROR CAUGHT:'); // 👈 ADD THIS


        console.log(error.message);

                console.log('Full error:', error); // 👈 ADD THIS


        res.json({
            success:false,
            message : error.message
        })
        

    }

}











export const removeImageBackground = async(req , res)=>{

    // i have added this
    console.log('=== GENERATE remove background CALLED ===');
    console.log('User ID:', req.userId); // ✅ Access from req directly
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);


    try {

        // added this 

        const userId = req.userId; // ✅ Get from req
        // const {userId} = req.auth();

        const image = req.file;

        const plan = req.plan;

        if(plan != 'premium'){
            return res.json({success : false , message: "This feature is only available for premium subscriptions"})
        }

                console.log('About to call Gemini API...'); // 👈 ADD THIS

        

        const {secure_url} = await cloudinary.uploader.upload(image.path , {
            transformation: [
                {
                    effect: 'background_removal',
                    background_removal: 'remove_the_background'
                }
            ]
        })


                console.log('Gemini API response received'); // 👈 ADD THIS






            console.log('Database insert successful'); // 👈 ADD THIS


    await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , 'Remove background from image' , ${secure_url}  , 'image'  ) `;

    

    res.json({success:true ,content: secure_url})



    }catch(error){

                console.log('ERROR CAUGHT:'); // 👈 ADD THIS


        console.log(error.message);

                console.log('Full error:', error); // 👈 ADD THIS


        res.json({
            success:false,
            message : error.message
        })
        

    }

}








export const removeImageObject = async(req , res)=>{

    // i have added this
    console.log('=== GENERATE remove background CALLED ===');
    console.log('User ID:', req.userId); // ✅ Access from req directly
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);


    try {

        // added this 

        const userId = req.userId; // ✅ Get from req
        // const {userId} = req.auth();

        const {object} = req.body;

        const image = req.file;

        const plan = req.plan;

        if(plan != 'premium'){
            return res.json({success : false , message: "This feature is only available for premium subscriptions"})
        }

                console.log('About to call Gemini API...'); // 👈 ADD THIS

        

        const {public_id} = await cloudinary.uploader.upload(image.path)



        const imageUrl = cloudinary.url(public_id , {
            transformation: [{effect:  `gen_remove:${object}` }],
            resource_type: 'image'
        })


                console.log('Gemini API response received'); // 👈 ADD THIS






            console.log('Database insert successful'); // 👈 ADD THIS


    await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , ${`Removed ${object} from image`} , ${imageUrl}  , 'image'  ) `;

    

    res.json({success:true ,content: imageUrl})



    }catch(error){

                console.log('ERROR CAUGHT:'); // 👈 ADD THIS


        console.log(error.message);

                console.log('Full error:', error); // 👈 ADD THIS


        res.json({
            success:false,
            message : error.message
        })
        

    }

}




// this is the original code



// export const resumeReview = async(req , res)=>{

//     // i have added this
//     console.log('=== GENERATE remove background CALLED ===');
//     console.log('User ID:', req.userId); // ✅ Access from req directly
//     console.log('Body:', req.body);
//     console.log('Plan:', req.plan);


//     try {

//         // added this 

//         const userId = req.userId; // ✅ Get from req
//         // const {userId} = req.auth();


//         const resume = req.file;

//         const plan = req.plan;

//         if(plan != 'premium'){
//             return res.json({success : false , message: "This feature is only available for premium subscriptions"})
//         }

//                 console.log('About to call Gemini API...'); // 👈 ADD THIS

        

//         if(resume.size > 5 *1024 * 1024){
//             return res.json({
//                 success:false, message: "Resume file size  exceeds allowed size (5MB)."
//             })
//         }

//         const dataBuffer = fs.readFileSync(resume.path)
//         const pdfData = await pdf(dataBuffer)


//         const prompt = `Review the following resume and provide constructive feedback on its strengths, weaknesses, and areas for impovement. Resume Content:\n\n${pdfData.text}`

//           const response = await AI.chat.completions.create({
//     model: "gemini-2.0-flash",
//     messages: [
//         {
//             role: "user",
//             content: prompt ,
//         },

//     ],
//     temperature : 0.7,
//     max_tokens : 1000,
// });




//                 console.log('Gemini API response received'); // 👈 ADD THIS

//     const content = response.choices[0].message.content




//             console.log('Database insert successful'); // 👈 ADD THIS


//     await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , 'Review the  uploaded resume' , ${content}  , 'resume-review'  ) `;

    

//     res.json({success:true ,content:  content})



//     }catch(error){

//                 console.log('ERROR CAUGHT:'); // 👈 ADD THIS


//         console.log(error.message);

//                 console.log('Full error:', error); // 👈 ADD THIS


//         res.json({
//             success:false,
//             message : error.message
//         })
        

//     }

// }




// export const resumeReview = async(req , res)=>{

//     console.log('=== GENERATE resume review CALLED ===');
//     console.log('User ID:', req.userId);
//     console.log('Body:', req.body);
//     console.log('Plan:', req.plan);

//     try {
//         const userId = req.userId;
//         const resume = req.file;
//         const plan = req.plan;

//         if(!resume){
//             return res.json({
//                 success: false, 
//                 message: "No resume file uploaded"
//             });
//         }

//         if(plan != 'premium'){
//             return res.json({success: false, message: "This feature is only available for premium subscriptions"})
//         }

//         console.log('About to process resume...');

//         if(resume.size > 5 * 1024 * 1024){
//             return res.json({
//                 success: false, 
//                 message: "Resume file size exceeds allowed size (5MB)."
//             })
//         }

//         // Try different ways to access pdf-parse
//         const pdfModule = await import('pdf-parse');
//         console.log('PDF Module keys:', Object.keys(pdfModule)); // See what's available
        
//         // Try these in order
//         const pdfParse = pdfModule.default || pdfModule || pdfModule.pdf;

//         console.log('pdfParse loaded:', typeof pdfParse);

//         if (typeof pdfParse !== 'function') {
//             throw new Error('pdf-parse module did not load correctly');
//         }

//         const dataBuffer = fs.readFileSync(resume.path)
//         const pdfData = await pdfParse(dataBuffer)

//         fs.unlinkSync(resume.path);

//         const prompt = `Review the following resume and provide constructive feedback on its strengths, weaknesses, and areas for improvement. Resume Content:\n\n${pdfData.text}`

//         const response = await AI.chat.completions.create({
//             model: "gemini-2.0-flash",
//             messages: [
//                 {
//                     role: "user",
//                     content: prompt,
//                 },
//             ],
//             temperature: 0.7,
//             max_tokens: 1000,
//         });

//         console.log('Gemini API response received');

//         const content = response.choices[0].message.content

//         console.log('Database insert successful');

//         await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, 'Review the uploaded resume', ${content}, 'resume-review')`;

//         res.json({success: true, content: content})

//     } catch(error){
//         console.log('ERROR CAUGHT:', error.message);
//         console.log('Full error:', error);

//         if(req.file && req.file.path && fs.existsSync(req.file.path)){
//             fs.unlinkSync(req.file.path);
//         }

//         res.json({
//             success: false,
//             message: error.message
//         })
//     }
// }



// we are sending it to gemeni directly without using pdfparse 
// USE SOME PARSING LIBRARY WHEN YOU HAVE TIME 


export const resumeReview = async(req , res)=>{

    console.log('=== GENERATE resume review CALLED ===');
    console.log('User ID:', req.userId);
    console.log('Body:', req.body);
    console.log('Plan:', req.plan);

    try {
        const userId = req.userId;
        const resume = req.file;
        const plan = req.plan;

        if(plan != 'premium'){
            return res.json({success : false , message: "This feature is only available for premium subscriptions"})
        }

        console.log('About to call Gemini API...');

        if(resume.size > 5 *1024 * 1024){
            return res.json({
                success:false, message: "Resume file size exceeds allowed size (5MB)."
            })
        }

        // Read file as base64
        const fileBuffer = fs.readFileSync(resume.path);
        const base64File = fileBuffer.toString('base64');

        const prompt = `Review the following resume and provide constructive feedback on its strengths, weaknesses, and areas for improvement.`;

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: prompt },
                        {
                            type: "image_url",
                            image_url: {
                                url: `data:application/pdf;base64,${base64File}`,
                            },
                        },
                    ],
                },
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        console.log('Gemini API response received');

        const content = response.choices[0].message.content;

        console.log('Database insert successful');

        await sql` INSERT INTO creations (user_id, prompt ,content , type ) VALUES (${userId} , 'Review the uploaded resume' , ${content}  , 'resume-review'  ) `;

        res.json({success:true ,content: content})

    }catch(error){
        console.log('ERROR CAUGHT:');
        console.log(error.message);
        console.log('Full error:', error);

        res.json({
            success:false,
            message : error.message
        })
    }
}