(function(){
	
	var scopeApplyController = function($scope){
		console.log("scopeApplyController running");
		
		$scope.name = "Henry!";
		
		angular.element('[data-ah-click-to-change-text]').on('click', function(){
			// We need $scope.$apply here, else binding wont update (angular does not pick up our change in jq click event)
			var $that = $(this);
			$scope.$apply(function(){
				$scope.name = $that.attr('data-ah-click-to-change-text');
			});
		});
	};
	
	angular.module('angularHtml5Routing').controller('scopeApplyController', scopeApplyController);
	scopeApplyController.$inject = ['$scope'];
	
	// http://stackoverflow.com/questions/17868889/running-apply-on-rootscope-vs-any-other-scope
	// Look into
	
})();