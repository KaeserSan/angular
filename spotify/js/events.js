$( document ).on("artistsReceived", function( event, param ){
	$('.artistList > select').html(param);
})

$( document ).on("albumsReceived", function( event, param ){
	$('.albumList > select').html(param);
})

$( document ).on("songsReceived", function( event, param ){
	$('.songList > img').prop('hidden', false);
	$('.songList > select').html(param);
})


