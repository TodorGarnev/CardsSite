// The main cart controller
myCardSiteControllers.controller('CartCtrl', function ($rootScope, $scope, dbFactory, Events) {
	$scope.items = {};
	$scope.isOrdered = false;

	var getAll = function() {
		var cardsDataPromise = dbFactory.getAll();
		cardsDataPromise.$promise.then(function(d) {
			$scope.items = d.data;
			$scope.total = 0;
			angular.forEach($scope.items, function (item) {
				$scope.total += item.price * item.quantity;
			});
		});
	};


	getAll();

	$scope.validateNums = function (event) {
		if (isNaN(parseInt(event.key))) {
			event.preventDefault();
		}
	};

	$scope.add = function (card) {
		dbFactory.add(card);
	};

	$scope.update = function (id, quantity) {
		dbFactory.update(id, quantity);
		getAll();
	};

	$scope.delete = function (id) {
		dbFactory.deleteCard(id);
		getAll();
		$rootScope.$broadcast(Events.UPDATE);
	};

	$scope.deleteAll = function () {
		dbFactory.deleteAll();
		getAll();
		$rootScope.$broadcast(Events.UPDATE);
	};

	$scope.order = function () {
		dbFactory.deleteAll();
		getAll();
		$rootScope.$broadcast(Events.UPDATE);
		$scope.isOrdered = true;
	};
});