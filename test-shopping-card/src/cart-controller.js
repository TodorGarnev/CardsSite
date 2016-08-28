myCardSiteControllers.controller('CartCtrl', function($scope, $resource) {

	$scope.test = {};

	$scope.add = function() {
		var Cards = $resource('/cards', {});
		Cards.get({}, function(cards) {
			$scope.test = (cards.toJSON()).data[0];


			console.log($scope.test);
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