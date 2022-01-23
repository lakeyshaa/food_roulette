const express = require('express');
const router = express.Router();
const models = require('../models')
const checkAuth = require('../checkAuth');

// GET /api/v1/locations
router.get('/', checkAuth, (req, res) => {
  models.Location.findAll({ where: { UserId: req.user.id }})
    .then(locations => {
      res.json(locations)
    })
});

// DELETE /api/v1/locations/6 
router.delete('/:id', checkAuth, (req, res) => {
  // try and remove location with id, so long as it is owned by the logged in user
  models.Location.destroy({ where: { 
    id: req.params.id,
    UserId: req.user.id
  }})
    .then(numberDeleted => {
      // if there was nothing deleted, then return an error
      if (numberDeleted === 0) {
        res.status(404).json({ error: 'Location not found' })
        return
      }

      // otherwise, send a success message
      res.json({ success: 'location removed' })
    })
})

// POST /api/v1/locations
router.post('/', checkAuth, (req, res) => {
  // check for required fields
  if (!req.body.zipcode) {
    res.status(400).json({ error: 'please provide zipcode' })
    return
  }

  // create location in database
  models.Location.create({
    zipcode: req.body.zipcode,
  })
    .then(location => {
      // respond to client with new team
      res.status(201).json(location)
    })
})

module.exports = router;