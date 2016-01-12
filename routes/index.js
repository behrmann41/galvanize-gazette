var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/galvanize-gazette')
var stories = db.get('stories')

/* GET home page. */

router.post('/new', function (req, res, next){
  console.log(req.body);
  console.log(req.body.title);
  stories.insert({title: req.body.title,
                  link: req.body.link,
                  imageurl: req.body.imageurl,
                  summary: req.body.summary
                })
    .then(function (response) {
      console.log(response);
    })
})

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
