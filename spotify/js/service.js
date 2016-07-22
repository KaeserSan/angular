angular.module("myControllersServices", [])
	.factory("artistService", function( $http, $rootScope ){
		function getArtists(){
			var urlArtists = "https://api.spotify.com/v1/search?type=artist&query="+ $rootScope.artistSearch;
			console.log('getArtists: '+ $rootScope.artistSearch);	
			console.log("Buscando: " +$rootScope.artistSearch);
			return $http.get(urlArtists);
		}
		return {
			getArtists: getArtists
		}
	})

	.factory("albumService", function( $http, $rootScope ){
		function getAlbums(){
			var urlAlbums = "https://api.spotify.com/v1/artists/" + $rootScope.albumSearch +"/albums";
			console.log('getAlbums: '+ $rootScope.albumSearch);	
			return $http.get(urlAlbums);
		}
		return {
		    getAlbums: getAlbums
		}
	})

	.factory("songService", function( $http, $rootScope ){
		function getSongs(){
			var urlSongs = "https://api.spotify.com/v1/albums/" + $rootScope.songSearch +"/tracks";
			console.log('getSongs: '+ $rootScope.songSearch);	
			return $http.get(urlSongs);
		}
		return {
		    getSongs: getSongs
		}
	})

// !-- dataType: "json"
//     https://api.spotify.com/v1/search?type=artist&query=<ARTIST-NAME>
//     https://api.spotify.com/v1/artists/<ID-ARTIST>/albums
//     https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks 