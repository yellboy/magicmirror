(function () {
    'use strict'

    angular.module('magicmirror').component('temperatureComponent', {
        templateUrl: './components/temperature/temperature.html',
        controller: temperatureController,
        transclude: true,
        bindings: {}
    });

    temperatureController.$inject = ['TemperatureService', '$timeout'];

    function temperatureController(TemperatureService, $timeout) {
        var vm = this;

        getTemperature();

        function getTemperature() {
            TemperatureService.getTemperature(function (response) {
                vm.temperature = response.temperature;

                $timeout(getTemperature, 5000);
            });
        }
    }
})();
