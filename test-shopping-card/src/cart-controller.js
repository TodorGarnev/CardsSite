myCardSiteControllers.controller('CartCtrl', function($scope) {

	$scope.add = function() {
		console.log('add called');

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