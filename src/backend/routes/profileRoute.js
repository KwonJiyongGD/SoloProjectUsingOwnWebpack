const express = require('express');
const router = express.Router();

const {
  getProfile,
  saveProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/ProfileController');

const ProfileController = require('../controllers/ProfileController');
const Profile = require('../models/ProfileModel');

router.get('/', getProfile);
router.post('/', saveProfile);
// router.put('/:name', updateProfile, ProfileController.updateProfile);
router.put('/:name', updateProfile, (req, res) => {
  return res.status(200).json(res.locals.selected);
});

router.delete('/', deleteProfile);

module.exports = router;
