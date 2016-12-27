(function () {
    'use strict'

    angular.module('magicmirror').component('calendar', {
        // Inline template which is binded to message variable
        // in the component controller
        template: '<div ng-repeat="e in $ctrl.events">{{e.event}}, {{e.date}} <br/></div>',

        // The controller that handles our component logic
        controller: function ($resource) {
            this.events = $resource('http://localhost:3000/calendar').query();
        }
    });

})();