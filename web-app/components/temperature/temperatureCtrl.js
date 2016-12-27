(function () {
    'use strict'

    angular.module('magicmirror').component('temperatureComponent', {
        templateUrl: './components/temperature/temperature.html',
        controller: temperatureController,
        transclude: true,
        bindings: {}
    });

    temperatureController.$inject = ['TemperatureService'];

    function temperatureController(TemperatureService) {
        var vm = this;

        TemperatureService.getTemperature(function (response) {
            vm.temperature = response.temperature;
        });
    }
})();
