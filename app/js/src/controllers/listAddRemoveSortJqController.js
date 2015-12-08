(function(){
	
	var listAddRemoveSortJqController = function($scope){
		console.log("listAddRemoveSortJqController");
		
		//
		// Add, Remove, Sort -- with jQuery
		
		var $ul = angular.element('[data-ars-jq-ul]');
		var $input = angular.element('[data-ars-jq-input]').find('input');
		var $button = angular.element('[data-ars-jq-input]').find('button');
		
		var checkIfMoveIsNeeded = function(){
			var $lis = $ul.find('li');
			if($lis.length < 2) {
				$lis.find('[data-ars-jq-ul-up]').remove();
				$lis.find('[data-ars-jq-ul-down]').remove();
			}
		};
		
		// Add
		$button.on('click', function(){
			if(!$input.val()) { return; }
			
			var markup = '<li>';
			markup += '<span>' + $input.val() + '</span>' + '&nbsp;&nbsp;';
			markup += '<span data-ars-jq-ul-up="">Up</span>&nbsp;&nbsp;';
			markup += '<span data-ars-jq-ul-down="">Down</span>&nbsp;&nbsp;';
			markup += '<span data-ars-jq-ul-remove="">Remove</span>&nbsp;&nbsp;';
			markup += '</li>';
			
			$ul.append(markup);
			$input.val("");
		});
		
		// Remove
		$ul.on('click', '[data-ars-jq-ul-remove]', function(){
			$(this).parent('li').remove();
			checkIfMoveIsNeeded();
		});
		
		// Sort, up
		$ul.on('click', '[data-ars-jq-ul-up]', function(){
			var $li = $(this).parent('li');
			var thisIndex = $li.index();
			
			if(thisIndex < 1) { return }
			$li.insertBefore($li.siblings(':eq(' + (thisIndex - 1) + ')'));
		});
		
		// Sort, down
		$ul.on('click', '[data-ars-jq-ul-down]', function(){
			var $li = $(this).parent('li');
			var thisIndex = $li.index();
			
			if(thisIndex >= $ul.find('li').length - 1) { return }
			$li.insertAfter($li.siblings(':eq(' + (thisIndex) + ')'));
		});
		
	};
	
	angular.module('angularHtml5Routing').controller('listAddRemoveSortJqController', listAddRemoveSortJqController);
	listAddRemoveSortJqController.$inject = ['$scope'];
	
})();