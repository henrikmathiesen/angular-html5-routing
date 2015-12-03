(function(){
	
	angular.module('angularHtml5Routing', ['ngRoute']);
	
})();


(function(){
	
	var config = function($routeProvider, $locationProvider){
		
		$routeProvider
		
		.when('/', {
			templateUrl: '/app/views/index.html',
			controller: 'indexController'
		})
		.when('/test', {
			templateUrl: '/app/views/test.html',
			controller: 'testController'
		})
		.when('/scope-apply', {
			templateUrl: '/app/views/scope-apply.html',
			controller: 'scopeApplyController'
		})
		
		.otherwise('/');
		
		$locationProvider.html5Mode(true);
	};
	
	
	angular.module('angularHtml5Routing').config(config);
	config.$inject = ['$routeProvider', '$locationProvider'];
	
})();