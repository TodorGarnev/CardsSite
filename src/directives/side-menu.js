myCardSiteControllers.controller('SideMenuCtrl',
	function ($rootScope, dbFactory, Events) {
		var vm = this;

		vm.cardsData = [];

		vm.getData = function () {
			return dbFactory.getAll().$promise.then(function (res) {
				return res.data;
			});
		};

		$rootScope.$on(Events.UPDATE, function () {
			 vm.getData().then(function (res) {
				 vm.cardsData = res;
			});
		});

		vm.getData();
	})
	.directive('sideMenu', function () {
		return {
			link: function postLink(scope, element, attrs, controller) {
				controller.getData().then(function(res) {
					controller.cardsData = res;
				});
			},
			controller: 'SideMenuCtrl',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {},
			templateUrl: 'views/side-menu.html'
		};
	});