(function() {
    'use strict'
    
    angular
        .module('magicmirror')
        .factory('proximityService', proximityService);
   
   proximityService.$inject = [ '$resource' ];
   
   function proximityService($resource) {
	var factory = {};
	factory.getResource = function() {
	       console.log($resource('http://localhost:8888/proximity'));
	       return $resource('http://localhost:8888/proximity', {});
	}
	return factory;
   }
   
})();