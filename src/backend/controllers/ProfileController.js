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

  // deleteProfile(req, res, next) {
  //   const { name } = req.params;

  //   Profile.findOneAndDelete({ name: name })
  //     .then((deletedProfile) => {
  //       console.log('DELETED THE PROFILE YAYYYYYY');
  //       res.locals.deletedProfile = deletedProfile;
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next({
  //         log: 'Error in deleting profile :(',
  //         status: 400,
  //         message: 'Error in deleting profile',
  //       });
  //     });
  // },

  deleteProfile(req, res, next) {
    const { name } = req.params;

    Profile.findOneAndDelete({ name: name })
      .then((deletedProfile) => {
        if (!deletedProfile) {
          return next({
            log: 'Error in deleting profile :(',
            status: 400,
            message: 'Error in deleting profile',
          });
        }
        res.locals.deletedProfile = deletedProfile;
        console.log(`Deleted profile: ${deletedProfile.name}`);
        return res.status(200).json({
          message: `Profile ${deletedProfile.name} deleted successfully YAYYYYYYYYYYYYYYYYYY`,
        });
      })
      .catch((err) => {
        return next({
          log: 'Error in deleting profile :(',
          status: 400,
          message: 'Error in deleting profile',
        });
      });
  },

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
