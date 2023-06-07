const { Router } = require('express');
const {
  getContact,
  saveContact,
  updateContact,
  deleteContact,
} = require('../controllers/ContactController');

const router = Router();

router.get('/', getContact);
router.post('/saveContact', saveContact);
router.post('/updateContact', updateContact);
router.post('/deleteContact', deleteContact);

module.exports = router;
