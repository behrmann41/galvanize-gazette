app.controller('HomeController', ['$scope', '$rootScope' ,'addstory', function ($scope, $rootScope, addstory) {

  $scope.story = true;
  $scope.toggle = 'Hide'
  addstory.getAllStories().then(function (stories) {
    $rootScope.allstories = stories.data;
  })
  $scope.storyDetails = function () {
    $scope.story = !$scope.story;
    if ($scope.story === false){
      $scope.toggle = 'Show'
    } else {
      $scope.toggle = 'Hide'
    }
  }

  $scope.newStory = function () {
    addstory.addStory($scope.title, $scope.link, $scope.imageurl, $scope.summary)
    $scope.title = null;
    $scope.link = null;
    $scope.imageurl = null;
    $scope.summary = null;
  }
}])

app.controller('ShowController', ['$scope', 'showstory', '$rootScope', '$routeParams', function ($scope, showstory, $rootScope, $routeParams) {
  showstory.findStoryId($routeParams.id).then(function (story) {
    $scope.title = story.data.title;
    $scope.imgurl = story.data.imageurl;
    $scope.storylink = story.data.storylink;
    $scope.summary = story.data.summary;
    $scope.opinions = story.data.opinions;
    return $scope.opinions
  }).then(function (opinions) {
    var result = {};
    opinions.forEach(function (opinion) {
      var words = opinion.split(' ');
      words.forEach(function (word) {
        var lower = word.toLowerCase();
        if (lower !== 'i' && lower !== 'the' && lower !== 'a' && lower !== 'it' && lower !== 'of' && lower !== 'not'){
          result[word] = result[word] ? result[word] + 1 : 1;
        }
      })
    })
    console.log(result);
    $scope.analysis = result;
  })

  $scope.newOpinion = function () {
    showstory.addOpinion($routeParams.id, $scope.opinion);
    $scope.opinion = null;
  }
}])
