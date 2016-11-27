angular.module('catalog',[])

.directive('mxCatalog', ['testData', function(testData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/catalog.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = testData.threads;


	  }
  }
}])










.factory('testData', function(){
	var testData = {}
	testData.threads = [
		{
			number: 1,
			title: 'cool thread',
			OP: 'anonymous',
			summary: 'this is something I did today I am happy!',
			ID: 'XADRPOA'
		},
		{
			number: 2,
			title: 'nice times',
			OP: 'anonymous',
			summary: 'asf is asdf I did asdfsadfa I am happy!',
			ID: 'ARAOPSO'
		},
		{
			number: 3,
			title: 'blah blah blah',
			OP: 'John John',
			summary: 'OK YALL I AM SO HAPY ABOUT THESE THREADS!!!!',
			ID: 'FAREAREAFE'
		},
		{
			number: 4,
			title: 'okkkkkkkkkk',
			OP: 'Sally Henry',
			summary: 'hello I am a girl and we love your site!',
			ID: 'DADADADADA'
		}
	]

	return testData
})