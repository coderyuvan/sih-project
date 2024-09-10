import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

 
app.use(express.json({
    limit:"20kb"
}))


app.use(express.urlencoded({
    extended: true,
}))

app.use(express.static("public"))

app.use(cookieParser())


 

// routes import
import userRouter from './routes/user.route.js'
 


// routes declared
 
 app.use("/api/v1/users",userRouter)


export default app