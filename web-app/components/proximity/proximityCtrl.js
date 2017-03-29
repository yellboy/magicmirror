(function () {
    'use strict'

    angular.module('magicmirror').component('proximityParser', {
        templateUrl: './components/proximity/proximity.html',
        controller: proximityController,
		transclude: true,
        bindings: {}
    });

    proximityController.$inject = [ '$timeout', '$resource' ];

    function proximityController($timeout, $resource) {
        var vm = this;
		
		vm.shouldDisplayMessage = shouldDisplayMessage;
		
		getProximity();
		
		function getProximity() {
			$resource('http://localhost:8888/proximity').get({}, function(data) {
				vm.proximity = data[0];
				//console.log(data);
			
				$timeout(getProximity, 1000);
			});
		}
		
		function shouldDisplayMessage() {
			return vm.proximity <= 1;
		}
    }
})();
