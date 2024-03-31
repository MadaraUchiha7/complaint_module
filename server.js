const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const path = require('path')
dotenv.config({path: '.env'})
const PORT = process.env.PORT || 8080
const connectDB = require('./server/database/connection')
app.use(morgan('tiny'));
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/components', express.static(path.resolve(__dirname, "assets/components")))
app.set('view engine', 'ejs')
app.use('/', require('./server/routes/router'))

app.listen( PORT, () => {
    console.log("Server is running on http://localhost:3000")
})