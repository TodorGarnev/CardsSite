// The main cart controller

myCardSiteControllers.controller('CartCtrl', function ($scope, $resource, $http) {

	$scope.items = {};

	$scope.print = function () {
		var Cards = $resource('/cards', {});

		Cards.get({}, function (cards) {
			$scope.items = (cards.toJSON()).data;  //data variable is sent from api.js

			console.log($scope.items); //the result is shown in browser's console log

		});
	};

	$scope.add = function (card) {
		var AddCard = $resource('/add',
			{name: '@name', price: '@price', quantity: '@quantity'}, {
				charge: {
					method: 'POST',
					params: {charge: true}
				}
			});

		AddCard.charge({'name': 'Valentine Card', 'price': '50.0', 'quantity': '15'});
		console.log('Added');
	};

	$scope.update = function (id, quantity) {
		var UpdateCard = $resource('/update/:id/:quantity', {id: '@id', quantity: '@quantity'}, {
			charge: {
				method: 'PUT',
				params: {charge: true}
			}
		});

		UpdateCard.charge({id: id, quantity: quantity});
		console.log('Updated');
	};


	$scope.delete = function (id) {
		var DelCard = $resource('/del/:id', {id: '@id'}, {
			charge: {
				method: 'DELETE',
				params: {charge: true}
			}
		});

		DelCard.charge({id: id});
		console.log('>>> Deleted id: ', id);
	};


});