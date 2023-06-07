const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017') //from Atlas
  .then(() => console.log('Connected to MongoDB :D'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
