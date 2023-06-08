const ProfileModel = require('../models/ProfileModel');

module.exports.getProfile = async (req, res) => {
  const contact = await ProfileModel.find();
  res.send(contact);
};

module.exports.saveProfile = async (req, res) => {
  const { name } = req.body;

  ProfileModel.create({ name }).then((data) => {
    console.log('Added Contact Info Successfully');
    console.log(data);
    res.send(data);
  });
};

module.exports.updateProfile = async (req, res) => {
  const { _id, name } = req.body;
  ProfileModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Updated the Data in DB'))
    .catch((err) => console.log(err));
};

module.exports.deleteProfile = async (req, res) => {
  const { _id } = req.body;
  ProfileModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted Profile from DB'))
    .catch((err) => console.log(err));
};
