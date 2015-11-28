(function(){
	
	var indexController = function($scope){
		console.log("indexController running");
	};
	
	
	angular.module('angularHtml5Routing').controller('indexController', indexController);
	indexController.$inject = ['$scope'];
	
})();