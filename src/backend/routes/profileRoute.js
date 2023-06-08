const { Router } = require('express');
const {
  getProfile,
  saveProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/ProfileController');

const router = Router();

router.get('/', getProfile);
router.post('/saveProfile', saveProfile);
router.post('/updateProfile', updateProfile);
router.post('/deleteProfile', deleteProfile);

module.exports = router;
