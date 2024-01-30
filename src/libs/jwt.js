import  jwt  from "jsonwebtoken";
// import { TOKEN_SECRET } from "../config.js";
import * as dotenv from "dotenv";
dotenv.config();
export function CreateAccessToken(payload) {
   return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            {
                expiresIn:"1d"
            },
            (err,token)=>{
                if (err) reject(err);
                resolve(token)
            })
    })
}