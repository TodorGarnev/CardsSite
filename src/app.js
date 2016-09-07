var myCardSiteControllers = angular.module('myCardSiteControllers', []);
var myCardSiteFactories = angular.module('myCardSiteFactories', []);


var app = angular.module('myCardSite', ['ngResource', 'ngRoute', 'myCardSiteControllers', 'myCardSiteFactories']);

app.config(['$resourceProvider', '$routeProvider', function ($resourceProvider, $routeProvider) {

	$resourceProvider.defaults.stripTrailingSlashes = false;

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/cart', {
			templateUrl: 'views/shopping-cart.html',
			controller: 'CartCtrl'
		})
		.when('/cards-birthday', {
			templateUrl: 'views/cards-birthday.html',
			controller: 'CardsCtrl'
		})
        .when('/cards-wedding', {
		    templateUrl: 'views/cards-wedding.html',
		    controller: 'CardsCtrl'
	   })
        .when('/cards-other', {
			templateUrl: 'views/cards-other.html',
			controller: 'CardsCtrl'
		})
		.when('/flowers', {
			templateUrl: 'views/flowers.html',
			controller: 'FlowersCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contacts', {
			templateUrl: 'views/contacts.html',
			controller: 'ContactsCtrl'
		})
		.when('/singlecard', {
			templateUrl: 'views/single-card.html',
			controller: 'SingleCardCtrl'
		})
		.when('/order', {
			templateUrl: 'views/order.html',
			controller: 'OrderCtrl'
		})
		.otherwise({redirectTo: '/'});

}]).run([function () {

}]);