const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
const EmployeeList = require('../models/emoloyeeListModel')

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/employeelist')
.then(()=>{
    console.log('connect successfully')
    app.listen(1729)
})
.catch((error)=>{
    console.log('error:', error)
})

app.post('/', async (req, res)=>{

    try {
        const { name, email, mobileNo, designation, gender, courses, imgUpload } = req.body;
        
        // Create a new employee document
        const newEmployee = new EmployeeList({
          name,
          email,
          mobileNo,
          designation,
          gender,
          courses,
          imgUpload,
          createdAt: new Date().setHours(0, 0, 0, 0),
        });
    
        // Save the employee document to the database
        await newEmployee.save();
    
        // Respond with the created employee document
        res.status(201).json(newEmployee);
      } catch (error) {
        res.status(400).json({ message: 'Error creating employee', error });
      }
})

//show List
app.get('/', async (req,res)=>{
    const ShowData = await EmployeeList.find();
    res.status(200).json(ShowData);
})

//get single user
app.get('/:id', async (req,res)=>{
  const {id} = req.params;
  const getUser = await EmployeeList.findById({_id : id});
  res.status(200).json(getUser);
})

//Delete user
app.delete('/:id', async (req,res)=>{
  const {id} = req.params;
  const DeleteUser = await EmployeeList.findByIdAndDelete({_id : id});
  res.status(200).json(DeleteUser);
})

//Update user
app.patch('/:id', async (req,res)=>{
  const {id} = req.params;
  const { name, email, mobileNo, designation, gender, courses, imgUpload } = req.body;
  const updateUser = await EmployeeList.findByIdAndUpdate(id, req.body, {new:true});
  res.status(200).json(updateUser);
})

