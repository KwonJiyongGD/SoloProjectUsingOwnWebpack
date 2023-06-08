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
router.put('/', updateProfile, ProfileController.updateProfile);
router.delete('/', deleteProfile);

module.exports = router;
