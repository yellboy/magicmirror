(function () {
	'use strict'

	angular.module('magicmirror').component('proximityParser', {
		templateUrl: './components/proximity/proximity.html',
		controller: proximityController,
		transclude: true,
		bindings: {}
	});

	proximityController.$inject = ['$timeout', 'proximityService'];

	function proximityController($timeout, proximityService) {
		var vm = this;

		getProximity();

		function getProximity() {
			proximityService.getProximity(function (response) {
				vm.proximity = response;
				
				$timeout(getProximity, 1000);
			});
		}
    }
})();
