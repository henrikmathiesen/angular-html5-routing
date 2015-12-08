(function(){
	
	var listAddRemoveSortNgController = function($scope){
		console.log("listAddRemoveSortNgController");
		
		$scope.names = ['Adam', 'Bertil', 'Ceasar'];
		$scope.newName = "";
		
		// Add
		$scope.addName = function(){
			if(!$scope.newName) { return; }
			$scope.names.push($scope.newName);
			$scope.newName = "";
		};
		
		// Remove
		$scope.removeName = function(index){
			$scope.names.splice(index, 1);
		};
		
		// Sort, up
		$scope.sortUp = function(index){
			if(index < 1) { return; }
		};
		
		// Sort, down
		$scope.sortDown = function(index){
			if(index >= $scope.names.length - 1) { return; }
		};
		
	};
	
	angular.module('angularHtml5Routing').controller('listAddRemoveSortNgController', listAddRemoveSortNgController);
	listAddRemoveSortNgController.$inject = ['$scope'];
	
})();