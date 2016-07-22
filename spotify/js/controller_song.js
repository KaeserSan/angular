angular.module('myControllersContainer')

	.controller('songCtrl', function ($scope) {
		console.log("song Ctrl. loaded...");

		$scope.playSong = function(){
			artistService.getArtists()
			.then ( function ( artists ){
				console.log( artists );
				$rootScope.artists = artists.data.artists.items;
				console.log($root.songSearch.albumImg);
				$scope.albumImg = $root.songSearch.albumImg;
			})
		}	})
