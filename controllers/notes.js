import Note from '../models/Note.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllNotes = asyncHandler(async (req, res, next) => {
  const notes = await Note.find().sort({ date: -1 });
  res.json(notes);
});

export const createNote = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const newNote = await Note.create({ ...body });
  res.status(201).json(newNote);
});

export const getSingleNote = asyncHandler(async (req, res, next) => {
  const {
    params: { id }
  } = req;
  const note = await Note.findById(id);
  if (!note) throw new ErrorResponse(`Note with id of ${id} doesn't exist`, 404);
  res.send(note);
});

export const updateNote = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id }
  } = req;
  const found = await Note.findById(id);
  if (!found) throw new ErrorResponse(`Note with id of ${id} doesn't exist`, 404);
  const updatedNote = await Note.findOneAndUpdate({ _id: id }, body, { new: true });
  res.json(updatedNote);
});

export const deleteNote = asyncHandler(async (req, res, next) => {
  const {
    params: { id }
  } = req;
  const found = await Note.findById(id);
  if (!found) throw new ErrorResponse(`Note with id of ${id} doesn't exist`, 404);
  await Note.deleteOne({ _id: id });
  res.json({ success: `Note with id of ${id} was deleted` });
});
