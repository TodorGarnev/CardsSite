// The main cart controller
myCardSiteControllers.controller('CartCtrl', function ($scope, dbFactory) {
	$scope.items = {};

	var getAll = function() {
		var cardsDataPromise = dbFactory.getAll();
		cardsDataPromise.$promise.then(function(d) {
			$scope.items = d.data;
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
		console.log('Added clicked');
	};

	$scope.update = function (id, quantity) {
		dbFactory.update(id, quantity);
		console.log('Updated clicked');
	};

	$scope.delete = function (id) {
		dbFactory.deleteCard(id);
		console.log('>>> Deleted clicked with id: ', id);
	};

	$scope.deleteAll = function () {
		dbFactory.deleteAll();
		getAll();
	}
});