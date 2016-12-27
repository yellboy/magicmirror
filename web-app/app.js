angular.module('magicmirror', [ 'ngResource' ]).controller('mainController', mainController);

mainController.$inject = [ 'proximityService', "TemperatureService" ];

function mainController(proximityService, TemperatureService) {
    var vm = this;
}