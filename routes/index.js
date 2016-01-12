var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/galvanize-gazette')
var stories = db.get('stories')

/* GET home page. */

router.post('/new', function (req, res, next){
  stories.insert({title: req.body.title,
                  link: req.body.link,
                  imageurl: req.body.imageurl,
                  summary: req.body.summary,
                  opinions: []
                })
    .then(function (response) {
      res.json(response);
    })
})

router.get('/findall', function (req, res, next) {
  stories.find({}).then(function (stories) {
    res.json(stories);
  })
})

router.get('/findone/:id', function (req, res, next) {
  stories.findById(req.params.id).then(function (story) {
    res.json(story)
  })
})

router.post('/opinions/:id', function (req, res, next) {
  stories.update({_id: req.params.id}, {$push: {opinions: req.body.opinion}}).then(function (data) {
    console.log(data);
  })
})

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
