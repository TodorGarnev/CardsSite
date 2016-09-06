myCardSiteControllers.controller('MenuCtrl',
	function ($scope, $location) {
		var vm = this;

		vm.navTitles = {
			home: 'home',
			cards: 'cards-birthday',
			cards: 'cards-wedding',
			cards: 'cards-other',
			flowers: 'flowers',
			about: 'about',
			contacts: 'contacts'
		};

		vm.navClass = function (page) {
			var currentRoute = $location.path().substring(1) || 'home';
			console.log('>>> currentRoute: ', currentRoute);
			console.log('>>> page: ', page);
			return page === currentRoute ? 'active' : '';
		};

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