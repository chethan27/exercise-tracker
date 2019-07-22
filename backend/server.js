const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

// middleware code
app.use(cors()); //helps in cross origin resource sharing
app.use(express.json()); //helps in parsing json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
}) // helps in listening on a certain port 