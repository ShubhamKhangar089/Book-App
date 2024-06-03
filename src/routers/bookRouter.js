import express from 'express';
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/bookController.js';
import role_access from '../middlewares/role.js';
import { downloadBook } from '../controllers/userController.js';

export const bookRouter = express.Router();

//get all books
bookRouter.get('/',role_access(["admin"]), getAllBooks);

//get user specific book
bookRouter.get('/:userId',role_access(["admin", "user"]), getBookById);

//add new book 
bookRouter.post('/add',role_access(["admin", "user"]), createBook);

//update book by id 
bookRouter.patch('/:id',role_access(["admin", "user"]), updateBook);

//delete book by id
bookRouter.delete('/:id',role_access(["admin", "user"]), deleteBook);

//download by id
bookRouter.get('/:id/download',role_access(["admin"], downloadBook ))