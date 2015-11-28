(function(){
	
	var indexController = function($scope){
		console.log("indexController controller running");
	};
	
	
	angular.module('angularHtml5Routing').controller('indexController', indexController);
	indexController.$inject = ['$scope'];
	
})();