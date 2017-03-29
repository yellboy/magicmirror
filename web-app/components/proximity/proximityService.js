(function () {
    'use strict'

    angular
    .module('magicmirror')
    .factory('proximityService', [
        '$http', '$rootScope',
        function ($http, $rootScope) {
            var service = {};

            service.getProximity = function (callback) {
                $http.get("http://localhost:8888/proximity", {})
                    .success(
                    function (response) {
                        callback(response);
                    });
            };
            return service;
        }]);
})();