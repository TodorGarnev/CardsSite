var myCardSiteControllers = angular.module('myCardSiteControllers', []);

var app = angular.module('myCardSite', ['ngResource', 'myCardSiteControllers']);

app.config(['$resourceProvider', function($resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);