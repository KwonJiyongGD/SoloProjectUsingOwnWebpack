const express = require('express');
const router = express.Router();
const {
  getProfile,
  saveProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/ProfileController');

router.get('/', getProfile);
router.post('/', saveProfile);
router.put('/', updateProfile);
router.delete('/', deleteProfile);

module.exports = router;
