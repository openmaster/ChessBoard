var chessApp = angular.module('chessApp', []);

chessApp.controller('mainController', function chessApp($scope, getDimensions){
	console.log('hitting mainController');
	$scope.heading = 'Chess Board';
	
	$scope.dimentions = function() {
		getDimensions.chess().then(function(data) {
			$scope.chess_board = data;
			console.log($scope.chess_board);
		});
		
	}
	$scope.dimentions();
});

console.log(chessApp);

