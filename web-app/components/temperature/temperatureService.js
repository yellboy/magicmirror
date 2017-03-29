(function () {
    'use strict'

    angular
    .module('magicmirror')
    .factory('TemperatureService', [
        '$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.getTemperature = function (callback) {
                $http.get("http://localhost:5000/temperature", {})
                    .success(
                    function (response) {
                        callback(response);
                    });
            };
            return service;
        }]);
})();