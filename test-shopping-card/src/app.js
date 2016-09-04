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
		.when('/cards', {
			templateUrl: 'views/cards.html',
			controller: 'CardsCtrl'
		})
		.otherwise({redirectTo: '/'});

}]).run([function () {

}]);