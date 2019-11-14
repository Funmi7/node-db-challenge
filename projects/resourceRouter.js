const express = require('express');

const Resources = require('./resourceModel');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.getResources()
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
    res.status(500).json({
      error: `Unable to fetch resources ${error.message}`
    })
  })
});

router.post('/', (req, res) => {
  Resources.addResource(req.body)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(error => {
    res.status(500).json({
      error: `Unable to add resource ${error.message}`
    })
  })
})



module.exports = router;