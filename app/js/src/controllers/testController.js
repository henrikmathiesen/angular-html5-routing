(function(){
	
	var testController = function($scope){
		console.log("testController running");
	};
	
	
	angular.module('angularHtml5Routing').controller('testController', testController);
	testController.$inject = ['$scope'];
	
})();