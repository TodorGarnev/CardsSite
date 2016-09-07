myCardSiteControllers.controller('SideMenuCtrl',
	function () {

	})
	.directive('sideMenu', function () {
		return {
			controller: 'SideMenuCtrl',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/side-menu.html'
		};
	});