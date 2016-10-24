(function () {
    'use strict'

    angular.module('magicmirror').component('proximityParser', {
        templateUrl: './components/proximity/proximity.html',
        controller: proximityController,
        bindings: {
        }
    });

    proximityController.$inject = [ 'proximityService' ];

    function proximityController(proximityService) {
        var vm = this;
        
        vm.proximity = proximityService();
    }
})();
