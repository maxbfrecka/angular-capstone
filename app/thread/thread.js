angular.module('thread',[])

.directive('mxThread', ['testData', '$routeParams', 'newReplyClick', function(testData, $routeParams, newReplyClick){
	return {
		restrict: 'E',
	  templateUrl: 'thread/thread.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;
	
	  	//gets thread info from URL
	  	var currentID = $routeParams.ID;
	  	var currentThread = scope.threads.filter(function(obj) {
    		return obj.ID === currentID;
			})[0];
			scope.thread = currentThread;


			//for show and hide post
			scope.newPostClick = newPostClick.if

	  	

	  }
  }
}])


.factory('newReplyClick',function(){
	var newReplyClick = {}

	newReplyClick.if = false

	return newReplyClick
})