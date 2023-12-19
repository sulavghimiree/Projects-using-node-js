const express = require('express');
const db = require('./database');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/login.html');
})

app.get('/signup', (req, res)=>{
    res.sendFile(__dirname+'/public/signup.html');
})

app.post('/', async (req, res)=>{
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    if(await db.findOne(data)){
        res.sendFile(__dirname+'/public/home.html');
    }else{
        res.sendFile(__dirname+'/public/login.html');
    }
})

app.post('/signup', async (req, res)=>{
    const data = {
        username:req.body.username,
        password:req.body.password
    }

    await db.insertMany([data]);
    res.sendFile(__dirname+'/public/home.html');
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`);
})