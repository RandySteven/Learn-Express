const express = require('express');

const app = express();

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoute);
app.use('/user', userRoute);

app.use('/home', (req, res)=>{
    console.log('Welcome to home');
    res.json({path: '/home', message:'Welcome', data:null});
});

app.listen(3000, (error)=>{
    if(error) process.exit(1);
    console.log("Server stabil please check localhost:3000");
});