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
  return obj
})
