app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('list',{
		url: '/list',
		templateUrl: 'app/view/list.html'
	})
	$urlRouterProvider.otherwise('/list')
}])