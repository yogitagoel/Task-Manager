const express = require('express');
const router = express.Router();
const Task = require('../models/Task.js');

router.post('/', async (req, res) => {
    try {
      const { title, description,status,dueDate} = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
      }
  
      const task = new Task({
        title,
        description,
        status,
        dueDate,
      });
  
      await task.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports=router;