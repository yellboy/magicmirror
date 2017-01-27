angular.module('magicmirror', [ 'ngResource' ]).controller('mainController', mainController);

mainController.$inject = ['$interval'];

function mainController($interval) {
    var init = function () {
        $interval(fadeInOut, 16000);
    };

    function fadeInOut() {
        $("welcome-message").fadeOut(4000);
        $("welcome-message").fadeIn(4000);
    }

    init();
}