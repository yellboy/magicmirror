angular.module('magicmirror', [ 'ngResource' ]).controller('mainController', mainController);

function mainController() {
    this.x = 2;
}