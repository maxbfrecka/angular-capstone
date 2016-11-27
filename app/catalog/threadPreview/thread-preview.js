angular.module('threadPreview',[])

.directive('mxThreadPreview', ['testData', function(testData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/threadPreview/thread-preview.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;


	  }
  }
}])