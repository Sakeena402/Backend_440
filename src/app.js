import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()


app.use(cors(
   {
    origin:process.env.CORS_ORIGIN,
    credentials:true
   } 
))
app.use(express.json({limit:"16kb"})) //for getting data from different resources
app.use(express.urlencoded({extented:true, limit:"16kb"})) //for getting data from url
app.use(express.static("public")) //to store file and folders for images and all
app.use(cookieParser()) //to access and set brower cookie and can perform crud operations on it
export{app}