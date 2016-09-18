myCardSiteControllers.controller('SingleCardCtrl',
	function ($rootScope, $scope, $window, $routeParams, dbFactory, Events) {
    $scope.imgId = $routeParams.imgId;
    $scope.name = $routeParams.name;
    $scope.price = $routeParams.price;

	$scope.back = function () {
		$window.history.back();
	};

	$scope.validateNums = function (event) {
		if (isNaN(parseInt(event.key))) {
			event.preventDefault();
		}
	};

	$scope.addCard = function () {
		var objCard = { name: $scope.name, price: $scope.price, quantity: $scope.quantity };
		dbFactory.add(objCard);
		$rootScope.$broadcast(Events.UPDATE);
	}
});