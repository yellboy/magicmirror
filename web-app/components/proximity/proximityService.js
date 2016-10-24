(function() {
    'use strict'
    
    angular
        .module('magicmirror')
        .factory('proximityService', proximityService);
   
   proximityService.$inject = [ '$resource' ];
   
   function proximityService($resource) {
       return $resource('localhost:8888/proximity');
   }
   
})();