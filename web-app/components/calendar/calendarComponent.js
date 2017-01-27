(function () {
    'use strict'

    angular.module('magicmirror').component('calendar', {
        // Inline template which is binded to message variable
        // in the component controller
        templateUrl: './components/calendar/calendar.html',

        // The controller that handles our component logic
        controller: function ($resource) {
            this.events = $resource('http://localhost:3000/calendar').query();
        }
    });

})();