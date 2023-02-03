// // install nodemon by :npm install nodemon --save-dev
// // run code by using : nodemon run start
// reference link https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/




const express = require('express')
const mongoose = require('mongoose')
const url="mongodb+srv://srazzz:krishnakranth@moviesdata.imazxhe.mongodb.net/movies_Dataa"

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(url)
const con =  mongoose.connection

con.on('open', async () => {
    // console.log("connected...")
})
app.use(express.json())

const dataRouter = require('./routes/moviesData')
app.use(dataRouter)
module.exports = app;

const st= require('./start')
