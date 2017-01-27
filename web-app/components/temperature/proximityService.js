(function() {
    'use strict'
    
    angular
        .module('magicmirror')
        .factory('proximityService', proximityService);
   
   proximityService.$inject = [ '$resource' ];
   
   function proximityService($resource) {
       return $resource('http://localhost:8888/proximity');
   }
   
})();