const { default: mongoose } = require('mongoose');
const todo = require('../models/TodoItem');
const TodoItem = require('../models/TodoItem');

const getTodos = async(req, res) => {
    
}   

const getTodoById = async(req, res) => {

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

    }
}

const updateTodo = async(req, res) => {

}

const deleteTodo = async(req, res) => {
    
}

module.exports = { getTodos,getTodoById,addTodo,updateTodo,deleteTodo }