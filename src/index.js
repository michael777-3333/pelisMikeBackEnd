import app from "./app.js";
import {connectDB} from "./db.js"
import * as dotenv from 'dotenv';
dotenv.config()


connectDB()
app.listen(process.env.PORT || 3000)
console.log('Server on port',3000);
