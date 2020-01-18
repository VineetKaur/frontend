function _login(){
	event.preventDefault();
	var email =  document.forms["login-form"]["username"].value; //   'abc@xyz.com';	//
	var pwd = document.forms["login-form"]["password"].value;  //  'abc'; 	//
	console.log('email: ', email, ' pwd: ', pwd);
	if (email == "") {
		alert("Name must be filled out");
		return false;
	}
	if (pwd == "") {
		alert("password must be filled out");
		return false;
	}
	if (!('fetch' in window)) {
		console.log('Fetch API not found, try including the polyfill');	  
	}
	else{
		console.log('fetch working');
	}

	localStorage.setItem("email", email);
	localStorage.setItem("password", pwd);
	// console.log('email: ', email.toString(), ' pwd ', pwd.toString());
	let protectedUrl="https://safe-city-backend-test.herokuapp.com/user/login";
	var requestBody={
		"email": email.toString(),
		"password": pwd.toString()
	};
	fetch(protectedUrl , {
		method: 'POST',
		// mode: 'no-cors',
		body: JSON.stringify(requestBody),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(function(res){
		res.json()
		.then(function(resData){
			localStorage.setItem("token", resData.token);
			console.log(resData);
		});
		console.log('token: ', localStorage.getItem("token"));
		window.location.replace('/index.html');
		console.log("res: ", res);
	}).catch(function(err){
		// localStorage.setItem("token", err);
		console.log("err: ", err);
	});
	
};

function _register(){}