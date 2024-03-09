const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => res.json({ message : 'welcome to the ideas'}));

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
