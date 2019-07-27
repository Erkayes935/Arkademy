function is_username_valid(username) {
    var huruf = /^[A-Za-z][A-Za-z0-9]{5,9}$/i;
	if(5 <= username.length <= 9  && huruf.test(username)) {
    	return true;
    }
    return false;
}
function is_password_valid(password) {
	var sandi = /^[A-ZOa-z0-9\=]{8,}$/i;
  if(password.length >= 8 && sandi.test(password)) {
     return true;
  }
  return false;
}
console.log(is_username_valid('dase7Fr'));
console.log(is_username_valid('7Fryfu'));
console.log(is_password_valid('=f6gEdjsLjdku'));
console.log(is_password_valid('HJ&Fhdjw9-dj'));