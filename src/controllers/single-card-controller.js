myCardSiteControllers.controller('SingleCardCtrl', function ($scope, $routeParams, dbFactory) {
    $scope.imgId = $routeParams.imgId;
    $scope.name = $routeParams.name;
    $scope.price = $routeParams.price;


	$scope.addCard = function () {
		var objCard = { name: $scope.name, price: $scope.price, quantity: $scope.quantity };
		dbFactory.add(objCard);
	}
});