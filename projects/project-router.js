const express = require('express');

// const recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
      res.status(200).json('api is working');
   
});

module.exports = router;