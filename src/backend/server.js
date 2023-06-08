const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const profileRouter = require('./routes/profileRoute');

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb+srv://kwon:lol@cluster0.hwdqma8.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB :D'))
  .catch((err) => console.log(err));

app.use('/profiles', profileRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
