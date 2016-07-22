angular.module('myControllersContainer', ['myControllersServices'])
	.controller('mainCtrl', function ($rootScope, $scope, artistService) {

		$scope.searchArtist = function(){
			artistService.getArtists()
			.then ( function ( artists ){
				console.log( artists );
				$rootScope.artists = artists.data.artists.items;
			})
		}
	})
