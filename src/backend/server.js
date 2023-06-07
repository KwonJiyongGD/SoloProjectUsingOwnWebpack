const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/contactRoute');
// import
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL) //from Atlas
  .then(() => console.log('Connected to MongoDB :D'))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
