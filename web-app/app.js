angular.module('magicmirror', [ 'ngResource' ]).controller('mainController', mainController);

mainController.$inject = [ 'proximityService' ];

function mainController(proximityService) {
    var vm = this;
}