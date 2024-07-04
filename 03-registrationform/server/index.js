const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://shrikantj2001:Shrikantj1729@cluster0.esagf1g.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0")

app.post('/register', (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

app.listen(5050, ()=>{
    console.log("server is running")
})