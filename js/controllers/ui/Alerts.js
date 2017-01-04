angular.module('ui.bootstrap').controller('AlertsCtrl', function ($scope, $http) {

/*EXAMPLE DATA */
/*
  $scope.alerts = [
    { type: 'alert alert-danger', msg: 'There were errors when I loaded the data'},
    { type: 'alert alert-success', msg: 'Well done! All the data is loaded '},
    { type: 'alert alert-warning', msg: 'Remember to reload the lost data'}
  ];*/
  

  $http.get('http://s18454838.onlinehome-server.info:8080/SimpleApiJSON-1.0-SNAPSHOT/get-json-from-db?table=alerts')
  .then(function(res){
     val= JSON.parse(JSON.stringify(res.data));
     $scope.alerts = val;
  });
  
  /*EXAMPLE DATA */
  /*
  $scope.notifications = [
     {type: 'tickets', num: 239},
     {type: 'email', num: 2},
     {type: 'uploads', num: 13},
     {type: 'updates', num: 0}
  ];
  */

    $http.get('http://s18454838.onlinehome-server.info:8080/SimpleApiJSON-1.0-SNAPSHOT/get-json-from-db?table=notifications')
  .then(function(res){
         val= JSON.parse(JSON.stringify(res.data));
         $scope.notifications = val;
  });

  $scope.getDateTimeNow = function()
  {
   return (new Date)  
  }  
});