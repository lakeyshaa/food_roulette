const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render(/*'index',*/ { title: 'Express' });
  // res.json( { title: 'Express' });
});

module.exports = router;
