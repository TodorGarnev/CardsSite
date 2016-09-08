angular.module('myCardSiteFactories').factory('sliderFactory', function ($timeout) {
	'use strict';

	var showSlider = function () {
		$timeout($(function () {
			$('#slides').slidesjs({
				width: 800,
				height: 300,
				play: {
					active: true,
					auto: true,
					interval: 3000,
					swap: true
				}
			});
		}), 100);
	};

	return {
		showSlider: showSlider
	};
});