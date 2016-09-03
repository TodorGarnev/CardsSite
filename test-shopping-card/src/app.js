var myCardSiteControllers = angular.module('myCardSiteControllers', []);
var myCardSiteFactories = angular.module('myCardSiteFactories', []);


var app = angular.module('myCardSite', ['ngResource', 'myCardSiteControllers', 'myCardSiteFactories']);

app.config(['$resourceProvider', function($resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);

