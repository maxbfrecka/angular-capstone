angular.module('newPost', ['firebase'])

.directive('mxNewPost', [function(){
	return {
		restrict: 'E',
	  templateUrl: 'newPost/new-post.html',
	  scope: true,
	  transclude: true,
    controllerAs: 'vm',
	  controller: function($firebaseArray, $location){
      var vm = this;

	  	var ref = firebase.database().ref('threads');
      vm.threads = $firebaseArray(ref);

      vm.newThread = function(send){
    		console.log("is it working?!!!")
        // do some validation
        if ( !send.thread ) {
        	console.log("nothing happened"); 
        	return false;
        }
        else {
        // save the thread
          console.log('it might be')
          var _OPID = make_randID();

          //array of threads containing thread objects
          //thread object contains array of posts
          // threads[0] selects the first thread
          // threads[0].posts[0] is the OP and also URL
          //array of posts inside of each thread

          vm.threads.$add({
            OPID: _OPID,
            posts: [{
              ID: _OPID,
              userName: 'anonymous',
              datetime: post_time(),
              content: send.thread.trim(),
              rID1bg: randomRGBcolor(),
              rID2bg: randomRGBcolor(),
              rID3bg: randomRGBcolor(),
              rID4bg: randomRGBcolor(),
              rID5bg: randomRGBcolor(),
              rID6bg: randomRGBcolor(),
              rID7bg: randomRGBcolor(),
              rID8bg: randomRGBcolor()
          }]});
          send.thread = '';
          $location.path('/' + _OPID);
        }
      };
	  	
	  }
  }
}])


// scope.threads.OPID
// scope.threads.posts
// #of post in database = array[#]