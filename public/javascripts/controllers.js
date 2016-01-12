app.controller('HomeController', ['$scope', 'addstory', function ($scope, addstory) {
  $scope.newStory = function () {
    addstory.addStory($scope.title, $scope.link, $scope.imageurl, $scope.summary)
  }
}])

app.controller('ShowController', ['$scope', function ($scope) {
  $scope.testShow = 'TestShow'
}])
