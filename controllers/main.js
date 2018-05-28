var chessApp = angular.module('chessApp', []);

chessApp.controller('mainController', function chessApp($scope, getDimensions){
	$scope.heading = 'Chess Board Project';
	$scope.dimentions = function() {
		getDimensions.chess().then(function(data) {
			$scope.chess_board = data;
		});
	}
	$scope.dimentions();
});

