// The main cart controller

myCardSiteControllers.controller('CartCtrl', function($scope, $resource) {

	$scope.items = {};

	$scope.print = function() {
		var Cards = $resource('/cards', {});
		Cards.get({}, function(cards) {
            $scope.items = (cards.toJSON()).data;  //data variable is sent from api.js
          
			console.log($scope.items); //the result is shown in browser's console log
           
		});
	};
    
    $scope.add = function(items) {
        var Cards = $resource('/cards', {});
		Cards.get({}, function(card) {
            $scope.items = (cards.toJSON()).card;  
          
			console.log($scope.items); 
           
		});
	};

	$scope.update = function(product) {
		console.log('update');
	};

	$scope.delete = function(product) {
		console.log('del');
	};

	$scope.edit = function(id) {
		console.log('edit');
	};

});