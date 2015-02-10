var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hackUSU' });
});

/* GET hackmit page.
router.get('/hackmit', function(req, res, next) {
  res.render('hackmit', { title: 'HackMIT' });
});
*/

module.exports = router;
