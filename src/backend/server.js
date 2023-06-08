const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const profileRouter = require('./routes/profileRoute');
const profileController = require('./controllers/ProfileController');

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

//get a profile in the DB
//http://localhost:5002/profile
profileRouter.get('/:name', profileController.getProfile, (req, res) => {
  return res.status(200).send(res.locals.selected);
});

//update/patch a profile name
profileRouter.patch('/:name', profileController.updateProfile, (req, res) => {
  return res.status(200).json(res.locals.selected);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
