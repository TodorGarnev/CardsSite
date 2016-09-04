var myCardSiteControllers = angular.module('myCardSiteControllers', []);
var myCardSiteFactories = angular.module('myCardSiteFactories', []);


var app = angular.module('myCardSite', ['ngResource', 'ngRoute', 'myCardSiteControllers', 'myCardSiteFactories']);

app.config(['$resourceProvider', '$routeProvider', function ($resourceProvider, $routeProvider) {

	$resourceProvider.defaults.stripTrailingSlashes = false;

	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'MainController'
		})
		.otherwise({redirectTo: '/'});

}]).run([function () {

}]);