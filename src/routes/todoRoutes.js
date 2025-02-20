import express from 'express';
import { 
  getAllTodos, 
  createTodo, 
  toggleTodo, 
  deleteTodo 
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/add', createTodo);
router.post('/toggle/:id', toggleTodo);
router.post('/delete/:id', deleteTodo);

export default router;