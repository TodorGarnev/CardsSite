myCardSiteControllers.controller('MenuCtrl',
	function () {

	})
	.directive('menu', function () {
		return {
			controller: 'MenuCtrl',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/menu.html'
		};
	});