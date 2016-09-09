myCardSiteControllers.controller('SideMenuCtrl',
	function (dbFactory) {
		var vm = this;

		vm.data = dbFactory.getAll().$promise.then(function (res) {
			return res.data;
		});
	})
	.directive('sideMenu', function () {
		return {
			link: function postLink(scope, element, attrs, controller) {
				controller.data.then(function(res) {
					scope.cardsData = res;
				});
			},
			controller: 'SideMenuCtrl',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/side-menu.html'
		};
	});