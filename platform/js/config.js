app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'misc/profile.html'
	})
	.when('/profile', {
		templateUrl: 'misc/profile.html'
	}) 
	.when('/publish',{
		templateUrl: 'misc/publishProject.html'
	})
	.when('/mypublish', {
		templateUrl: 'misc/myPublisP.html'
	}).otherwise({ redirectTo: '/' })
})