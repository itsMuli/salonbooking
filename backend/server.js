import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authroutes from './Routes/authroute.js';
import serviceRoutes from './Routes/serviceRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js'
import cors from'cors';


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/", authroutes)
app.use('/api', serviceRoutes)
app.use('/api', categoryRoutes)

app.get('/', (req,res) => {
    res.send("welcome to InfinityNailSalon")
})

const PORT =  process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port${PORT}`.bgCyan.white);
});