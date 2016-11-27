angular.module('newPost',[])

.directive('mxNewPost', [function(){
	return {
		restrict: 'E',
	  templateUrl: 'newPost/new-post.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	
	  }
  }
}])