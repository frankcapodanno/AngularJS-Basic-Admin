app.controller('MainController', ['$scope', '$http', function ($scope, $http){
  $scope.title = 'Welcome Admin!';
  $scope.subtitle = 'Example of a complex UI with AngularJS';
  
  /*DATA EXAMPLE*/
  /*
  $scope.products = [
    {
     id: 23, 
     name: 'Java Web Applications Enterprise Template',
     price: 179,
     pubdate: new Date('2016', '10', '16'),
     cover: 'img/development.png',
     description: 'This product have many applications. A useful ',
     likes: 0     
    },
    {
      id: 48,
      name: 'Effective Java(2nd Edition): Programming Language Guide',
      price: 33,
      pubdate: new Date('2008', '10', '3'),
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51sRluR-aOL._SX359_BO1,204,203,200_.jpg',
      description: 'This book is the basis for programming in Java in a effective way',
      likes: 0
    }
  ];
  */
  
  $http.get('http://s18454838.onlinehome-server.info:8080/SimpleApiJSON-1.0-SNAPSHOT/get-json-from-db?table=products')
  .then(function(res){
     val= JSON.parse(JSON.stringify(res.data));
     $scope.products = val;
  });

  $scope.plusOne = function(index)
  {
    $scope.products[index].likes += 1;
  }

  $scope.selectItem = function(index)
  {
    $scope.description = $scope.products[index].description;
    return $scope.products[index].description;
  }

  $scope.getId = function(index)
  {
    console('getId called!');
    return $scope.products[index].id;
  }
}]);