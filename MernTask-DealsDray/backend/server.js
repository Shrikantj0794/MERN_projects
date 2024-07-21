const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employeeRouter = require('./routes/employeeRouter')
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/employeelist')
  .then(() => {
    console.log('Connected successfully');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((error) => {
    console.log('Connection error:', error);
  });

  app.use(employeeRouter)