$( document ).ready(function() {
	var currentUsername = Cookies.get('currentUsername'); 

	if(currentUsername == undefined){
		document.location = "sign-in.html";
	}
	else {
		$('.page-title').append('Здравствуйте, ' + currentUsername + '!');
	}

	$( ".js-logout-btn" ).click(function( event ) {
		Cookies.remove('currentUsername');
		document.location = document.location;

	});
});