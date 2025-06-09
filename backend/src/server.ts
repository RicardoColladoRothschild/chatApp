import express from 'express';
import {connectDB} from './lib/db'
import "dotenv/config";


// dotenv.config();                  

import authRoutes from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT;





app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`[X] - Starting main server`);
    console.log(`server running on http://localhost:${PORT} `);
    connectDB();
});