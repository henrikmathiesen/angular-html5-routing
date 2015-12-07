(function(){
	
	var scopeApplyController = function($scope, $rootScope){
		console.log("scopeApplyController running");
		
		$scope.name01 = "Adam";
		$scope.name02 = "Bertil"
		$scope.name03 = "Ceasar";
		$scope.name04 = "David";
		$scope.name05 = "Erik";
		
		// Changes the name fine
		$scope.changeName = function(){
			$scope.name01 = "Henrik";
		};
		
		// Changes the name fine
		$scope.changeNameToo = function(){
			$scope.name02 = angular.element('[data-ah-newname]').attr('data-ah-newname');
		};
		
		// We need $scope.$apply here, else binding wont update (angular does not pick up our change in jq click event)
		angular.element('[data-ah-click-to-change-text]').on('click', function(){
			var $that = $(this);
			$scope.$apply(function(){
				$scope.name03 = $that.attr('data-ah-click-to-change-text');
			});
		});
		
		// rootScope seems to work as well
		angular.element('[data-ah-click-to-change-text-rs]').on('click', function(){
			var $that = $(this);
			$rootScope.$apply(function(){
				$scope.name04 = $that.attr('data-ah-click-to-change-text-rs');
			});
		});
		
		// We dont need to pass the change in the callback function to $apply
		// We can just use
		// $scope.name = ...
		// $scope.$apply()
		// But then errors will not be handled in angular
		
		/*
			$scope.apply() vs $rootScope.$apply()
		
			Running $apply on any scope always results in a $rootscope.$digest.
			The only case where it might make a difference is when you provide 
			an expression as an argument to $apply. The expression will be evaluated
			in the current scope (vs. $rootScope), but afterwards $rootscope.$digest is always called.
			
			http://stackoverflow.com/questions/17868889/running-apply-on-rootscope-vs-any-other-scope
		*/
	};
	
	angular.module('angularHtml5Routing').controller('scopeApplyController', scopeApplyController);
	scopeApplyController.$inject = ['$scope', '$rootScope'];
	
})();