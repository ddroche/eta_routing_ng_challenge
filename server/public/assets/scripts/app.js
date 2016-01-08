var app = angular.module('catApp', []);

app.controller('catCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.cats = [];
    $scope.cat = {};

    var getCats = function() {
      return $http.get('/cat').then(function(res) {
        if(res.status !== 200) {
          throw new Error('Failed to fetch cats');
        }
        $scope.cat = {};
        $scope.cats = res.data;
        return res.data;
      });
    };

  $scope.addCat = function(cat) {
    return $http.post('/cat', cat).then(getCats());
  }
  getCats();
}]);
