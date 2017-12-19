var express = require('express')
var router = express.Router()


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.agent) {
    res.render('restricted', { title: 'Restricted', agent: req.session.agent })
  }
  else {
    res.render('index', { title: 'gClassified' })
  }
})


module.exports = router
