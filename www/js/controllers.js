angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProductsCtrl', function($scope) {
  $scope.products = [
    { title: 'Pringles', id: 1, img: 'img/kt.png', msg: 'Price:$3', weight: 'Weight:100 gms' },
    { title: 'Basumati Rice', id: 2, img: 'img/kt.png', msg: 'Price : $2', weight: 'Weight:1 kg' },
    { title: 'Diary Milk', id: 3, img: 'img/kt.png', msg: 'Price : $7', weight: 'Weight:100 gms' },
    { title: 'Dish wash', id: 4, img: 'img/kt.png', msg: 'Price : $5', weight: 'Weight:200 ml' },
    { title: 'Red Bull', id: 5, img: 'img/kt.png', msg: 'Price : $6', weight: 'Weight:450 ml' },
   ];
})

.controller('ProductCtrl', function($scope, $stateParams) {
});
