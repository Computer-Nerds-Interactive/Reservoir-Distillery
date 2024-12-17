$(document).ready(function(){
	if (!Cookies.get('alert')) { 
	  $('.popup-overlay').show(); 
 	  Cookies.set('alert', true, { expires: 1 });
	}
});
// Documentation at https://github.com/js-cookie/js-cookie