const express = require('express');
const router = express.Router();

router.post('/sample', (req, res) => {
    res.status(200).send({ response: 'Sample' });
});

module.exports = router;
