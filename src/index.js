
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import connectDB from "./db/index.js";

connectDB();

// import express from 'express'
// const app = express()

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("error",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log("app is listening")
//         })

//     }catch(error){
//         console.error(error)
//         throw error

//     }
// })()


