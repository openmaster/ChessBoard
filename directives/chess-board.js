chessApp.directive('chessBoard', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/partials/chess_board.html',
		replace: true,
		scope: {
		  chess_board: "=dimentions"
		},
		link: function(scope, element, attrs) {
			scope.chess = [];
			
			reset_orginal_colors = function(){
				for(i = 0; i < scope.chess.length; i++) {
					for(j = 0; j < scope.chess[i].length; j++){
						if(scope.chess[i][j].clicked == true){
							scope.chess[i][j].clicked = false;
						}					
					}
				}
			}
			scope.cell_click = function(col){
				reset_orginal_colors()
				col.clicked = true;
			}

			push_black = function(i, j){
				return {
					class:'black',
					i: i,
					j: j
				};
			}

			push_white = function(i, j){
				return{
					class:'white',
					i: i,
					j: j
				};
			}

			starting_white = function(dim, i){
				node = [];
				for(j = 1; j <= dim.cols; j++){
					if(j%2 == 0){
						//even coloumn
						node.push(push_black(i, j));
					} else {
						node.push(push_white(i, j));
					}
				}
				scope.chess.push(node);
			}

			starting_black = function(dim, i){
				node = [];
				for(j = 1; j <= dim.cols; j++){
					if(j%2 == 0){
						//even coloumn
						node.push(push_white(i, j));
					} else {
						node.push(push_black(i, j));
					}
				}
				scope.chess.push(node);
			}

			create_chess = function(dim) {
				//dim object should have rows and cols
				scope.chess = [];
				if(dim.rows != null && dim.cols != null) {
					for(i = 1; i <= dim.rows; i++) {
						//adding number of rows
						if(i%2 == 0){
							//this is even row
							starting_white(dim, i);
						} else {
							//this is odd row
							starting_black(dim, i);
						}
					}
				}
			}

			scope.$watch('chess_board', function(values){
				if(values){
					create_chess(values);
				}
			}, true);

		}
	};
});
