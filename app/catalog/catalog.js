angular.module('catalog',[])

.directive('mxCatalog', ['testData', 'newPostClick', function(testData, newPostClick){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/catalog.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;
	  	scope.newPostClick = newPostClick.if

	  	scope.postTime = post_time()

	  }
  }
}])

.factory('newPostClick',function(){
	var newPostClick = {}

	newPostClick.if = false

	return newPostClick
})








.factory('testData', function(){
	var testData = {}
	testData.threads = [
		{
			number: 1,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 2,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 3,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 4,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 5,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 6,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 7,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 1,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 2,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 3,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 4,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 5,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 6,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 7,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor()
		}
	]

	return testData
})