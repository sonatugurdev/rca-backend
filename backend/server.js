const express = require('express');
const path = require('path');
const cors = require('cors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./helpers/errorHandler')

const port = process.env.PORT || 4000;

const app = express();


app.use(bodyParser.json());
app.use(cors())
app.use(errorHandler)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}
//Routes
const usersRoutes = require('./routers/users');

const api = process.env.API_URL;

app.use(`${api}/users` , usersRoutes);

mongoose.connect(process.env.D_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'beyyoglu-database',
}).then(() => {
  console.log('database initialized.')
}).catch((err) => {
  console.log('error ' + err);
});

app.listen(port, () => console.log(`server started on port ${port}`));