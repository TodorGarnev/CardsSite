angular.module('myCardSiteFactories').factory('dbFactory', function($resource) {
	'use strict';

	var getAll = function () {
		var Cards = $resource('/cards', {});
		return Cards.get({}, function (cards) {
			return (cards.toJSON()).data;
		});
	};

	var add = function (card) {
		var AddCard = $resource('/add',
			{name: '@name', price: '@price', quantity: '@quantity'}, {
				charge: {
					method: 'POST',
					params: {charge: true}
				}
			});

		AddCard.charge(card);
		console.log('Added from factory');
	};

	var update = function (id, quantity) {
		var UpdateCard = $resource('/update/:id/:quantity', {id: '@id', quantity: '@quantity'}, {
			charge: {
				method: 'PUT',
				params: {charge: true}
			}
		});

		UpdateCard.charge({id: id, quantity: quantity});
		console.log('Updated from factory');
	};

	var deleteCard= function (id) {
		var DelCard = $resource('/del/:id', {id: '@id'}, {
			charge: {
				method: 'DELETE',
				params: {charge: true}
			}
		});

		DelCard.charge({id: id});
		console.log('>>> Deleted from factory with id: ', id);
	};

	return {
		getAll: getAll,
		add: add,
		update: update,
		deleteCard: deleteCard
	};
});