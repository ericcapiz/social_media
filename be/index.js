const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true},() =>{
    console.log("Connected to MongoDB")
})
app.listen(8800, () => {
    console.log("Running Server....")
})