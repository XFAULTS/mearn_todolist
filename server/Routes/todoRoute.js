const express = require('express');
const router = express.Router();
const todo = require('../mongo_model/todoModel')

router.get('/', async (req,res)=>{
    const todos = await todo.find();
    res.json(todos)
});

router.post('/', async(req,res)=>{
    const todos = new todo({
        title : req.body.title
    });

    const newTodo = await todos.save();
    console.log(newTodo);
    res.json(newTodo);
});

module.exports = router;