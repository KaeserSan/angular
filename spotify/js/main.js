$('#bArtists').on("click", function( event ) {
	event.preventDefault();
	getArtists();
});
		
$('#selAlbums').on("change", function(){
	console.log("Album changed!");
	emptySong();
	putAlbumImg();
});

$('#bAlbums').on("click", function( event ){
	event.preventDefault();
	getAlbums();			
});

$('#bSongs').on("click", function( event ){
	event.preventDefault();
	getSongs();
});

$('#bPlay').on("click", function( event) {
	event.preventDefault();
	reprod();
});

$('#selArtists').on("change", function(){
	emptyAlbumSong();
});


function emptyAlbumSong(){
	$('.songList > img').prop('hidden', 'true');
	$('.albumList > select').html("");
	$('.songList > select').html("");
}
function emptySong(){
	$('.songList > select').html("");
}

function putAlbumImg(){
	console.log($('#selAlbums > option').attr('albumimage'));
	$('.songList > img').prop("src", $('#selAlbums > option').attr('albumimage'));
	$('.songList > img').prop("hidden", false);
}