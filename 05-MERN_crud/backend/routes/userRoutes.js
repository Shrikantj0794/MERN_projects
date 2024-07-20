const express = require('express')
const User = require('../models/userModel')
const router = express.Router();

//create user
router.post('/', async (req,res)=>{
    // this name,email,age comes on frontend
    const{name,email,age} = req.body;

    try {
        const userData = await User.create({
        // backend:frontend
            name: name,
            email:email,
            age:age
        })
        
    res.status(200).json(userData)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
})
//show all data
router.get('/', async(req, res)=>{
    try {
        const showData = await User.find();
        res.status(200).json(showData)
    } catch (error) {
        console.log(error)
    }
})
//get single user
router.get('/:id', async(req, res)=>{
    const{id} = req.params;
    try {
        const showData = await User.findById({_id : id});
        res.status(200).json(showData)
    } catch (error) {
        console.log(error)
    }
})
//delete single user
router.delete('/:id', async(req, res)=>{
    const{id} = req.params;
    try {
        const deleteData = await User.findByIdAndDelete({_id : id});
        res.status(200).json(deleteData)
    } catch (error) {
        console.log(error)
    }
})
//Update user
router.patch('/:id', async(req, res)=>{
    const{name, email,age} = req.body;
    const{id} = req.params;
    try {
        const updateData = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updateData)
    } catch (error) {
        console.log(error)
    }
})

module.exports= router