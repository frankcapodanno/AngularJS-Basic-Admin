angular.module('ui.bootstrap').controller('ModalCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
 
  $ctrl.items = [];
  $ctrl.titles = ['Message']; /* default title of a modal window */
  
  $ctrl.animationsEnabled = true;
  
  $ctrl.selectDescription = function(descr)
  {
    $ctrl.items =[descr];
  }

   $ctrl.setMessage = function(descr)
  {
    $ctrl.items =[descr];
  }

  $ctrl.setTitle = function(tit)
  {
    $ctrl.titles = [tit];
  }

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-list ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        titles: function() {
          return $ctrl.titles;
        }
      }

    });

  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        titles: function(){
          return $ctrl.titles;
        }
      }
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($uibModalInstance, items, titles) {
  var $ctrl = this;
  
  $ctrl.items = items;
  $ctrl.titles = titles;

  $ctrl.selected = {
    item: $ctrl.items[0],
    title: $ctrl.titles[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
     $uibModalInstance.close($ctrl.selected.title);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.titles = $ctrl.resolve.titles;
      $ctrl.selected = {
        item: $ctrl.items[0],
        title: $ctrl.titles[0]
      };
    };

    $ctrl.ok = function () {
      
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});