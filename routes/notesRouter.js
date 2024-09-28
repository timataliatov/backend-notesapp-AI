import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote
} from '../controllers/notes.js';

const notesRouter = Router();

notesRouter.route('/').get(getAllNotes).post(createNote);

notesRouter.route('/:id').get(getSingleNote).put(updateNote).delete(deleteNote);

export default notesRouter;
