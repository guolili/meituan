app.controller('funcController', ['$scope','$http', function($scope, $http){
	$http({
		url: 'http://localhost:8888/data'
	}).then(function(result){
        $scope.shopList = result.data; //所有的数据
	},function(err){
		console.log(err);
	})
}])