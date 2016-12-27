(function () {
    'use strict'

    angular.module('magicmirror').component('proximityParser', {
        templateUrl: './components/proximity/proximity.html',
        controller: proximityController,
		transclude: true,
        bindings: {}
    });

    proximityController.$inject = [ 'proximityService' ];

    function proximityController(proximityService) {
        var vm = this;
		
        proximityService.get().$promise.then(function(data) {
			vm.proximity = data[0];
		});
    }
})();
