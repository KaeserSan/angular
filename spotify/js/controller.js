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

	.controller('artistCtrl', function ($rootScope, $scope, albumService) {
		console.log("artists Ctrl. loaded...");

		$scope.searchAlbum = function(){
			albumService.getAlbums()
			.then ( function ( albums ){
				console.log( albums );
				$rootScope.albums = albums.data.items;
				console.log( $rootScope.albums );

			})
		}	

	})

	.controller('albumCtrl', function ($rootScope, $scope, songService) {
		console.log("album Ctrl. loaded...");

		$scope.searchSong = function(){
			songService.getSongs()
			.then ( function ( songs ){
				console.log( songs );
				$rootScope.songs = songs.data.items;
			})
		}	})

	.controller('songCtrl', function ($scope) {
		console.log("song Ctrl. loaded...");

		$scope.playSong = function(){
			artistService.getArtists()
			.then ( function ( artists ){
				console.log( artists );
				$rootScope.artists = artists.data.artists.items;
			})
		}	})
