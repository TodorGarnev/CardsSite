myCardSiteControllers.controller('SingleCardCtrl',
	function ($rootScope, $scope, $window, $routeParams, dbFactory, Events) {
    $scope.imgId = $routeParams.imgId;
    $scope.name = $routeParams.name;
    $scope.price = $routeParams.price;

	$scope.back = function () {
		$window.history.back();
	};

	$scope.addCard = function () {
		var objCard = { name: $scope.name, price: $scope.price, quantity: $scope.quantity };
		dbFactory.add(objCard);
		$rootScope.$broadcast(Events.UPDATE);
	}
});