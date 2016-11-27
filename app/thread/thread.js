angular.module('thread',[])

.directive('mxThread', function(){
	return {
		restrict: 'E',
	  templateUrl: 'thread/thread.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){

	  }
  }
})