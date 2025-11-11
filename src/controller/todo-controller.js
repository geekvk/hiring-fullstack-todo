const { default: mongoose } = require('mongoose');
const todo = require('../models/TodoItem');
const TodoItem = require('../models/TodoItem');

const getTodos = async(req, res) => {
    try{
        const todos = await TodoItem.find({});
        res.status(202).json({
            success : true,
            body : todos
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}   

const getTodoById = async(req, res) => {
    try{
        const todoItemId = req.params.id;
        const todoById = await TodoItem.findById(todoItemId);
        if(!todoById){
            return res.status(404).json({
                success : false,
                message : 'The Item is not found'
            });
        }
        res.status(200).json({
            success : true,
            body : todoById
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}

const addTodo = async(req, res) => {
    try{
        const newTodoFormData = req.body;
        const newTodo = await TodoItem.create(newTodoFormData);
        if(newTodoFormData){
            res.status(201).json({
                success : true,
                message : "Item is added successfully",
                data : newTodo
            });
        }

    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}

const updateTodo = async(req, res) => {
    try{
        const itemId  = req.params.id;
        const updatedTodo = await TodoItem.findByIdAndUpdate(
            itemId,
            req.body,
            { 
                new: true,      
                runValidators: true
            }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({
            success : true,
            body : updatedTodo
        });

    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}

const toggleTodo = async(req, res) => {
    try{
        const itemId  = req.params.id;
        const updatedTodo = await TodoItem.findByIdAndUpdate(
            itemId,
            [
                {
                    $set: { isDone: { $not: "$isDone" } } 
                }
            ],
            { new: true } 
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({
            success : true,
            body : updatedTodo
        });

    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}

const deleteTodo = async(req, res) => {
    try{
        const todoItemId = req.params.id;
        const deletedItem = await TodoItem.findByIdAndDelete(todoItemId);
         if(!deletedItem){
            return res.status(404).json({
                success : false,
                message : 'The Item is not found'
            });
        }
        res.status(200).json({
            success : true,
            message : "Item is deleted"
        });

    }catch(error){
        res.status(500).json({
            success : false,
            message : "Something went wrong. Please try again"
        });
    }
}

module.exports = { getTodos,getTodoById,addTodo,updateTodo,toggleTodo, deleteTodo }