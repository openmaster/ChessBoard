chessApp.directive('chessBoard', function() {
	console.log('hittng directive log');
	return {
		restrict: 'E',
		templateUrl: 'directives/partials/chess_board.html',
		replace: true,
		scope: {
		  chess_board: "=dimentions"
		},
		link: function(scope, element, attrs) {
			scope.show = function(){
				console.log(scope.chess_board);
			}

		}
	};
});