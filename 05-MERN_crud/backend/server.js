const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
app.use(express.json());
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
app.use(cors())


mongoose.connect(process.env.URI)
.then(()=>{
    console.log('connect successfully')
    app.listen(process.env.PORT || 1721)
}).catch((error)=>{
    console.log('error', error)
})

app.use(userRouter)

