const express = require('express');
const app = express();
const mongoose = require('mongoose')
const EmployeeList = require('../models/emoloyeeListModel')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, mobileNo, designation, gender, courses } = req.body;

    // Create and save a new employee document
    const newEmployee = new EmployeeList({
      name,
      email,
      mobileNo,
      designation,
      gender,
      courses,
      createdAt: new Date(),
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: 'Error creating employee', error });
  }
});

// Show List
router.get('/', async (req, res) => {
  try {
    const ShowData = await EmployeeList.find();
    res.status(200).json(ShowData);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching data', error });
  }
});

// Get single user
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await EmployeeList.findById(id);
    if (!getUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(getUser);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching user', error });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const DeleteUser = await EmployeeList.findByIdAndDelete(id);
    if (!DeleteUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(DeleteUser);
  } catch (error) {
    res.status(400).json({ message: 'Error deleting user', error });
  }
});

// Update user
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, mobileNo, designation, gender, courses } = req.body;
  try {
    const updateData = { name, email, mobileNo, designation, gender, courses };
    const updateUser = await EmployeeList.findByIdAndUpdate(id, updateData, { new: true });
    if (!updateUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error });
  }
});

module.exports = router;