const ProfileModel = require('../models/ProfileModel');

module.exports.getProfile = async (req, res) => {
  try {
    const profiles = await ProfileModel.find();
    res.send(profiles);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving profiles');
  }
};

module.exports.saveProfile = async (req, res) => {
  try {
    const { name, age, gender, info } = req.body;

    const profile = new ProfileModel({
      name,
      age,
      gender,
      info,
    });

    const savedProfile = await profile.save();
    res.send(savedProfile);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving profile');
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { _id, name, age, gender, info } = req.body;

    await ProfileModel.findByIdAndUpdate(_id, { name, age, gender, info });
    res.send('Updated the Data in DB');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating profile');
  }
};

module.exports.deleteProfile = async (req, res) => {
  try {
    const { _id } = req.body;

    await ProfileModel.findByIdAndDelete(_id);
    res.send('Deleted Profile from DB');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting profile');
  }
};
