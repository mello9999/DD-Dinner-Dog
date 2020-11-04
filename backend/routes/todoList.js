const express = require('express');
const router = express.Router();
const todoListContollers = require('../controllers/todoList');
const passport = require('passport');

const authentication = passport.authenticate("jwt", {session: false});

router.get('/',authentication, todoListContollers.getTodoList);
router.post('/',authentication, todoListContollers.addTodoList);
router.put('/:id',authentication, todoListContollers.updateTodoList);
router.delete('/:id',authentication, todoListContollers.deleteTodoList);

module.exports = router;