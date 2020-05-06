const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const userRoute = require('./routes/user');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(console.log('Database connected'));

//handling routes

app.use('/api', userRoute);


//port
const port = process.env.PORT || 8000;



app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
    
});