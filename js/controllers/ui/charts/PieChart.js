angular.module("nvd3").controller('PieChart', function($scope, $http){

           $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };


/*EXAMPLE DATA TO USE WITHOUT CONNECTION TO DB*/
/*
        $scope.data = [
            {
                key: "12-14 ",
                y: 50
            },
            {
                key: "49-65 ",
                y: 20
            },
            {
                key: "29-45 ",
                y: 90
            },
            {
                key: "18-29 ",
                y: 70
            },
            {
                key: "45-49 ",
                y: 40
            },
            {
                key: "12-14 ",
                y: 30
            },
            {
                key: "6-10 ",
                y: 5
            }
];
*/
/**JUST IN THIS EXAMPLE CASE I USE AN HTTP protocolo for a web service. for security reason is important to use SSL protocol */
  $http.get('http://s18454838.onlinehome-server.info:8080/SimpleApiJSON-1.0-SNAPSHOT/get-json-from-db?data=piegraph')
  .then(function(res){
     val= JSON.parse(JSON.stringify(res.data));
     $scope.data = val;
  });
    })