(function () {
    'use strict'

    angular.module('magicmirror').component('proximityParser', {
        templateUrl: './components/proximity/proximity.html',
        controller: proximityController,
		transclude: true,
        bindings: {}
    });

    proximityController.$inject = [ '$timeout', 'proximityService' ];

    function proximityController($timeout, proximityService) {
        var vm = this;
		
		vm.shouldDisplayMessage = shouldDisplayMessage;
		
		getProximity();
		
		function getProximity() {
			proximityService.get().$promise.then(function(data) {
				vm.proximity = data[0];
			
				$timeout(getProximity, 1000);
			});
		}
		
		function shouldDisplayMessage() {
			return vm.proximity <= 1;
		}
    }
})();
