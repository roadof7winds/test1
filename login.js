function putPassInLocalStorage() {
	var ns = Storages.initNamespaceStorage('users');
	var storage = ns.localStorage;
	storage.set('user1', 'qwerty12345');
	storage.set('user2', 'dsaf23');
	storage.set('user3', '23423');
};

$( document ).ready(function() {
	putPassInLocalStorage();

   var validator = $(".signin-form").validate({
	  rules: {
	    username: "required",
	    password: "required"
	    
	  },
	  messages: {
	    username: "Необходимо ввести логин",
	    password: "Необходимо ввести пароль"
	  }
	});
 
   $( ".js-login-btn" ).click(function( event ) {
   		var ns = Storages.initNamespaceStorage('users');
		var storage = ns.localStorage;

 		if($(".signin-form").valid()){

	   		var login = $('#username').val();
	   		var password = $('#password').val();

	   		var storagePassword = storage.get(login);
	   		console.log(storagePassword);

	   		if ( storagePassword != undefined && password == storagePassword) {
	   			Cookies.set('currentUsername', login);

	   			document.location = "hello.html";

	   		}else{
				validator.showErrors({
				  "username": "Неверный логин или пароль",
				  "password": "Неверный логин или пароль"
				});
	   		}
	        
	 		return false;
	 	}
    });

 
});