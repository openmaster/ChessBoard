chessApp.directive('chessBoard', function() {
	console.log('hittng directive log');
	return {
		restrict: 'E',
		templateUrl: 'directives/partials/chess_board.html'
	};
});