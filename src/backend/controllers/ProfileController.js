const Profile = require('../models/ProfileModel');
// const fetch = require('node-fetch');
const axios = require('axios');

const ProfileController = {
  getProfile(req, res, next) {
    const { name } = req.params;

    Profile.findOne({ name: name })
      .then((selected) => {
        if (!selected) {
          return next({
            log: 'Error in finding selected name in getProfile',
            status: 400,
            message: 'Error in finding profile',
          });
        }
        res.locals.selected = selected;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error in profile getProfile',
          status: 400,
          message: 'Error in finding profile',
        });
      });
  },

  updateProfile(req, res, next) {
    const { name } = req.params;
    const { age } = req.body;

    Profile.findOneAndUpdate({ name: name }, { age }, { new: true })
      .then((selected) => {
        if (!selected) {
          return next({
            log: 'Error in finding profile to update',
            status: 404,
            message: 'Profile not found',
          });
        }
        res.locals.selected = selected;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error updating profile',
          status: 400,
          message: 'Error in updating profile',
        });
      });
  },

  deleteProfile(req, res, next) {
    const { name } = req.body;

    Profile.findOneAndDelete({ name: name }, { age }, { new: true })
      .then((selectedProfile) => {
        res.locals.selectedProfile = selectedProfile;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error in deleting profile :(',
          status: 400,
          message: 'Error in deleting profile',
        });
      });
  },

  // async saveProfile(req, res) {
  //   try {
  //     const { name, age, gender, info } = req.body;

  //     // Fetch a random dog image
  //     const response = await fetch('https://dog.ceo/api/breeds/image/random');
  //     const data = await response.json();
  //     const imageUrl = data.message;

  //     const profile = new Profile({
  //       name,
  //       age,
  //       gender,
  //       info,
  //       imageUrl,
  //     });

  //     const savedProfile = await profile.save();

  //     // Send the saved profile back to the frontend
  //     res.json(savedProfile);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send('Error saving profile');
  //   }
  // },

  async saveProfile(req, res) {
    try {
      const { name, age, gender, info } = req.body;

      // Fetch a random dog image
      const response = await axios.get(
        'https://dog.ceo/api/breeds/image/random'
      );
      const imageUrl = response.data.message;

      const profile = new Profile({
        name,
        age,
        gender,
        info,
        imageUrl,
      });

      const savedProfile = await profile.save();

      // Extract the necessary data for the frontend
      const profileData = {
        name: savedProfile.name,
        age: savedProfile.age,
        gender: savedProfile.gender,
        info: savedProfile.info,
        imageUrl: savedProfile.imageUrl,
      };

      // Send the extracted profile data back to the frontend
      res.json(profileData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error saving profile');
    }
  },
};

module.exports = ProfileController;
