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
		.when('/list-add-remove-sort-jq', {
			templateUrl: '/app/views/list-add-remove-sort-jq.html',
			controller: 'listAddRemoveSortJqController'
		})
		.when('/list-add-remove-sort-ng', {
			templateUrl: '/app/views/list-add-remove-sort-ng.html',
			controller: 'listAddRemoveSortNgController'
		})
		
		.otherwise('/');
		
		$locationProvider.html5Mode(true);
	};
	
	
	angular.module('angularHtml5Routing').config(config);
	config.$inject = ['$routeProvider', '$locationProvider'];
	
})();