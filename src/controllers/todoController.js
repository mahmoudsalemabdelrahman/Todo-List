import Todo from '../models/todoModel.js';

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.render('index', { todos });
  } catch (error) {
    res.status(500).render('error', { message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    await Todo.create({ title: req.body.title });
    res.redirect('/');
  } catch (error) {
    res.status(400).render('error', { message: error.message });
  }
};