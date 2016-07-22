angular.module('myControllersContainer')

	.controller('albumCtrl', function ($rootScope, $scope, songService) {
		console.log("album Ctrl. loaded...");

		$scope.searchSong = function(){
			songService.getSongs()
			.then ( function ( songs ){
				console.log( songs );
				$rootScope.songs = songs.data.items;
			})
		}	
	})

