const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
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

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//handling routes
app.use('/api', userRoute);


//port
const port = process.env.PORT || 8000;



app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
    
});