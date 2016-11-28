angular.module('newPost',['firebase'])

.directive('mxNewPost', [function(){
	return {
		restrict: 'E',
	  templateUrl: 'newPost/new-post.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs, $firebaseArray){

	  	var ref = firebase.database().ref('threads');
      scope.threads = $firebaseArray(ref);

      scope.sendMessage = function(send){
      		console.log("is it working?!!!")
          // do some validation
          if ( !send.message ) {
          	console.log("nothing happened"); 
          	return false;
          }
          else {
          // save the thread
            scope.threads.$add({
                ID: make_randID(),
                userName: 'anonymous',
                datetime: post_time(),
                content: send.thread.trim(),
                rID1bg: randomRBGcolor(),
                rID2bg: randomRBGcolor(),
                rID3bg: randomRBGcolor(),
                rID4bg: randomRBGcolor(),
                rID5bg: randomRBGcolor(),
                rID6bg: randomRBGcolor(),
                rID7bg: randomRBGcolor(),
                rID8bg: randomRBGcolor()
            });
            send.thread = '';
          }
      };
	  	
	  }
  }
}])