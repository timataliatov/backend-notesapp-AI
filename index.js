import './db/index.js';
import express from 'express';
import cors from 'cors';
import entriesRouter from './routes/entriesRouter.js';
import notesRouter from './routes/notesRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/entries', entriesRouter);
app.use('/notes', notesRouter);
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
