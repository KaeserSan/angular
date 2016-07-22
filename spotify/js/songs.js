function getSongs() {
	if($('.albumList > select').val()) {	
		$.ajax({
			url: "../json/a-night.json" 
		})
		.done( function ( songs ){
			var resultHtml = "";
			$.each( songs.items, function ( index, oSong ){
				// console.log("Song: " + oSong.name);
				resultHtml += '<option value="' + oSong.preview_url +'" idSong="' + oSong.preview_url + '">' + oSong.name + '</option>'
			})
			$ ( document ).trigger("songsReceived",  resultHtml);
		})
	}
}( jQuery )