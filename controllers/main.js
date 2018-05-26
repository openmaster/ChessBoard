var chessApp = angular.module('chessApp', []);

chessApp.controller('mainController', function chessApp($scope){
	console.log('hitting mainController');
	$scope.heading = 'Chess Board';
});

console.log(chessApp);

