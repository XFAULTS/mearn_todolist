const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const todoRoute = require('./Routes/todoRoute');

const PORT = 5000 || process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todolistDB").then(()=>{
    console.log("DataBase Connected");
})
app.use('/todos',todoRoute);
app.listen(PORT , ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})