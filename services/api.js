chessApp.factory('getDimensions', function($http){
	return {
		chess: function() {
			return $http.get('http://apn.knowroaming.com/krchessapp-api/get-dimensions/').then(function(d) {
				return d.data;
			});
		}
		
	};
});
//returning promise from chess method of getDimensions service.