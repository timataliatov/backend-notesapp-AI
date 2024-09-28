import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const entrySchema = new Schema({
  author: { type: String, required: [true, 'Author is required'] },
  title: { type: String, required: [true, 'Title is required'] },
  content: { type: String, required: [true, 'Content is required'] },
  image: { type: String },
  date: { type: Date, default: Date.now }
});

export default model('Entry', entrySchema);
