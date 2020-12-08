const express = require('express');
import {SAMPLE_DATA} from 'environment-configuration';

const router = express.Router();

router.post('/sample', (req, res) => {
    res.status(200).send({response: SAMPLE_DATA});
});

module.exports = router;
