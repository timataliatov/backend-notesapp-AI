import Entry from '../models/Entry.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllEntries = asyncHandler(async (req, res, next) => {
  const entries = await Entry.find().sort({ date: -1 });
  res.json(entries);
});

export const createEntry = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const newEntry = await Entry.create({ ...body });
  res.status(201).json(newEntry);
});

export const getSingleEntry = asyncHandler(async (req, res, next) => {
  const {
    params: { id }
  } = req;
  const entry = await Entry.findById(id);
  if (!entry) throw new ErrorResponse(`Entry with id of ${id} doesn't exist`, 404);
  res.send(entry);
});

export const updateEntry = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id }
  } = req;
  const found = await Entry.findById(id);
  if (!found) throw new ErrorResponse(`Entry with id of ${id} doesn't exist`, 404);
  const updatedEntry = await Entry.findOneAndUpdate({ _id: id }, body, { new: true });
  res.json(updatedEntry);
});

export const deleteEntry = asyncHandler(async (req, res, next) => {
  const {
    params: { id }
  } = req;
  const found = await Entry.findById(id);
  if (!found) throw new ErrorResponse(`Entry with id of ${id} doesn't exist`, 404);
  await Entry.deleteOne({ _id: id });
  res.json({ success: `Entry with id of ${id} was deleted` });
});
