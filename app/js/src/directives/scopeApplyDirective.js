(function(){
	
	var scopeApplyDirective = function(){
		
		return {
			
			restrict: 'A',
			link: function(scope, element, attributes){
				element.on('click', function(){
					// We need scope.$apply here else binding wont update
					scope.$apply(function(){
						scope.name05 = "Henrik";	
					});
				});
			}
			
		};
		
	};
	
	angular.module('angularHtml5Routing').directive('ahScopeApply', scopeApplyDirective)
	
})();