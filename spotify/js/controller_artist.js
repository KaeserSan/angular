angular.module('myControllersContainer')

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

// angular.module('myApp.controllers').controller('Ctrl1', ['$scope', '$http', function($scope, $http){
