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
			randomColor: randomRGBcolor(),
			img: "http://www.yeepet.com/blog_image/201105/BlogImg1_1306299013.jpg"
			// rID is generated and attached in full
			// is split into 8 inside of the view not in here
			// random colors are generated on post and attached to data object sequentially
			// background and foreground
			// scope.thread.rID1bg rID1c etc
			// puts that into STYLE attributes inside of the directive template
			// when reply, uses that data and copies the HTML
			// how do replies work? - > clicks on post to reply...
			// adds the tag to new reply box with tags
		},
		{
			number: 2,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "https://a2-images.myspacecdn.com/images03/30/e1845dc3c59e423299531741aa8e857d/300x300.jpg"
		},
		{
			number: 3,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://public.media.smithsonianmag.com/legacy_blog/jack-o-lantern.jpg"
		},
		{
			number: 4,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://jayarmstronggames.com/jagwp/wp-content/uploads/2012/11/Screen-shot-2012-11-21-at-19.32.50.png"
		},
		{
			number: 5,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 6,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://jayarmstronggames.com/jagwp/wp-content/uploads/2012/11/Screen-shot-2012-11-21-at-19.32.50.png"
		},
		{
			number: 7,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 1,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 2,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 3,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 4,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 5,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 6,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 7,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		},
		{
			number: 8,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA',
			postTime: post_time(),
			randomColor: randomRGBcolor(),
			img: "http://www.k9healthcentre.com/img/dog_running.jpg"
		}
	]

	return testData
})