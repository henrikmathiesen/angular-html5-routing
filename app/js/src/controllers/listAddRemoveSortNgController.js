(function () {

	var listAddRemoveSortNgController = function ($scope) {
		console.log("listAddRemoveSortNgController");

		$scope.names = ['Adam', 'Bertil', 'Ceasar'];
		$scope.newName = "";


		var swapArrayElements = function (indexA, indexB) {
			var temp = $scope.names[indexA];
			$scope.names[indexA] = $scope.names[indexB];
			$scope.names[indexB] = temp;
		};
		
		
		// Add
		$scope.addName = function () {
			if (!$scope.newName) { return; }
			$scope.names.push($scope.newName);
			$scope.newName = "";
		};
		
		// Remove
		$scope.removeName = function (index) {
			$scope.names.splice(index, 1);
		};
		
		// Sort, up
		$scope.sortUp = function (index) {
			if (index < 1) { return; }
			swapArrayElements(index, index - 1);
		};
		
		// Sort, down
		$scope.sortDown = function (index) {
			if (index >= $scope.names.length - 1) { return; }
			swapArrayElements(index, index + 1);
		};

	};

	angular.module('angularHtml5Routing').controller('listAddRemoveSortNgController', listAddRemoveSortNgController);
	listAddRemoveSortNgController.$inject = ['$scope'];

})();