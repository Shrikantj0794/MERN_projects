const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
      },
      mobileNo: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/,
      },
      designation: {
        type: String,
        required: true,
        enum: ['HR', 'Manager', 'Sales'],
        default: null
      },
      gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female'],
        default: null
      },
      courses: {
        type: [String],
        enum: ['MCA', 'BCA', 'BSC'],
        default: null
      },
      createdAt: {
        type: Date,
        default: () => new Date().setHours(0, 0, 0, 0),
      },
    });

    const EmployeeList = mongoose.model('EmployeeList', formSchema);

    module.exports = EmployeeList;