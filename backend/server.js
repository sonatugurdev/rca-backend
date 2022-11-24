const express = require('express');
const path = require('path');
const cors = require('cors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./helpers/errorHandler')
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(errorHandler)

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))

//Routes
const usersRoutes = require('./routers/users');


app.use('/api/users' , usersRoutes);

app.listen(port, () => console.log(`server started on port ${port}`));