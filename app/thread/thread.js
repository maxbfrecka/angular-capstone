angular.module('thread',[])

.directive('mxThread', ['testData', '$routeParams', function(testData, $routeParams){
	return {
		restrict: 'E',
	  templateUrl: 'thread/thread.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;
	  	scope.thread = scope.threads[$routeParams.id]
	  	console.log(scope.threads[$routeParams.id])


	  	

	  }
  }
}])