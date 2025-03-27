const express = require('express');
const router = express.Router();
const task = require('../models/Task.js');

router.post('/tasks', async(req,res) => {
    const task = new task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        duedate: req.body.dueDate,
    })
    try{
        const newtask = await task.save();
        res.status(201).json(newtask);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

application.get('/tasks', async(req,res) =>{
    try{
        const tasks = await task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});
