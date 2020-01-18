function _logout(){
	localStorage.removeItem("token");
	localStorage.removeItem("id");
	localStorage.removeItem("email");
	localStorage.removeItem("pwd");
	window.location.replace('/login.html');
}

_logout();