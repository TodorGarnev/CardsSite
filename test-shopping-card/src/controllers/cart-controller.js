// The main cart controller
myCardSiteControllers.controller('CartCtrl', function ($scope, dbFactory) {

	$scope.items = {};

	$scope.printAll = function () {
		var cardsDataPromise = dbFactory.getAll();
		cardsDataPromise.$promise.then(function(d) {
			$scope.items = d.data;
		 });
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
});