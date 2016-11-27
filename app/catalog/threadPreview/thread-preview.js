angular.module('threadPreview',[])

.directive('mxThreadPreview', ['testData', function(testData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/threadPreview/thread-preview.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;


	  	//mock of posttime
	  	scope.postTime = post_time();
	  	console.log('post time is ' + scope.postTime);


	  	scope.randomColor = randomRGBcolor();
	  	console.log(scope.randomColor)


	  }
  }
}])