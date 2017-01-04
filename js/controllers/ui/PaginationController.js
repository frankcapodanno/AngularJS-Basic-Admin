angular.module('ui.bootstrap').controller('PaginationCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;
  $scope.elements = ['it is simple', 'use all the bootstrap elements', 
  'in AngularJS', 'this code could be improved using templates instead a single page', 
  'Here I show just the ability to integrate AngularJS to Bootstrap', 'amazing responsive'];
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});