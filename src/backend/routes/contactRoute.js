const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hi' });
});

module.exports = router;