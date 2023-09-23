require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workouts', workoutRoutes)
app.use('/user', userRoutes)

//Connection to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //Start app
        app.listen(process.env.PORT, ()=>{
            console.log('connected & listening on port 5000...')
        })
    })
    .catch((error)=>{
        console.log(error)
    })

