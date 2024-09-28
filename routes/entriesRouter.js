import { Router } from 'express';
import {} from '../controllers/entries.js';
import {
  createEntry,
  deleteEntry,
  getAllEntries,
  getSingleEntry,
  updateEntry
} from '../controllers/entries.js';
const notesRouter = Router();

notesRouter.route('/').get(getAllEntries).post(createEntry);

notesRouter.route('/:id').get(getSingleEntry).put(updateEntry).delete(deleteEntry);

export default notesRouter;
