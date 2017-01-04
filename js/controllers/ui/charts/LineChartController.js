angular.module("chart.js").controller("LineCtrl", function ($scope,$http) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Java Templates', 'Java Effective Book'];

/* DATA EXAMPLE */
/*
  $scope.data = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]];
*/
/**
 * With a customized Web API resource it is possible to make different use of the relation with the Database.
 * It possible to define functional relation to the app. and not just table --> data 
 */

  $http.get('http://s18454838.onlinehome-server.info:8080/SimpleApiJSON-1.0-SNAPSHOT/get-json-from-db?data=linegraph')
  .then(function(res){
     val= JSON.parse(JSON.stringify(res.data));
     $scope.data = val;
  }); 

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
}
);