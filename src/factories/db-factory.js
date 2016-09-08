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
	};

	var update = function (id, quantity) {
		var UpdateCard = $resource('/update/:id/:quantity', {id: '@id', quantity: '@quantity'}, {
			charge: {
				method: 'PUT',
				params: {charge: true}
			}
		});

		UpdateCard.charge({id: id, quantity: quantity});
	};

	var deleteCard= function (id) {
		var DelCard = $resource('/del/:id', {id: '@id'}, {
			charge: {
				method: 'DELETE',
				params: {charge: true}
			}
		});

		DelCard.charge({id: id});
	};

	var deleteAll = function () {
		var DelAll = $resource('/del', {}, {
			charge: {
				method: 'DELETE',
				params: {charge: true}
			}
		});

		DelAll.charge();
	};

	return {
		getAll: getAll,
		add: add,
		update: update,
		deleteCard: deleteCard,
		deleteAll: deleteAll
	};
});