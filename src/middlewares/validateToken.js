import jwt from 'jsonwebtoken'
// import { TOKEN_SECRET } from '../config.js'
import * as dotenv from "dotenv";


dotenv.config();
export const authRequired=(req,res,next)=>{
    console.log('ddd');
    const {token}=req.cookies
    if (!token) 
        return res.status(401).json({message: "No token, autorization denied"})  
    


    jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        if (err) return res.status(403).json({message:"Invalid token"})
        req.user =user
        next()
    })
}