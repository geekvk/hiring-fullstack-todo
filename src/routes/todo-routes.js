const express = require('express');
const { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } = require('../controller/todo-controller.js');
const router = express.Router();

router.get('/todos', getTodos);
router.get('/todos/:id',getTodoById);
router.post('/todos',addTodo);
router.put('/todos/:id',updateTodo);
router.delete('/todos/:id',deleteTodo);

module.exports = router;
