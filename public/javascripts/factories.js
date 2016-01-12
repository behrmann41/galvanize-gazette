app.factory('addstory',function ($http) {
  var obj = {}

  obj.addStory = function (title, link, imageurl, summary) {
    var data = {title: title,
                link: link,
                imageurl: imageurl,
                summary: summary
                }
    return $http.post('/new', data);
  }

  obj.getAllStories = function () {
    return $http.get('/findall')
  }
  return obj;
})

app.factory('showstory', function ($http) {
  var obj = {}

  obj.findStoryId = function (id) {
    return $http.get('/findone/' + id)
  }

  obj.addOpinion = function (id, opiniontext) {
    var data = {opinion: opiniontext}
    return $http.post('/opinions/' + id, data)
  }
  return obj;
})
