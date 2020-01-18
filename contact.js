function _contacts(){
	let userId="5e20012d8d74633b6c544c4f";
	let rating=3;
	let review="my god!!!";
	let license_number="MH123";
	let protectedUrl="https://safe-city-backend-test.herokuapp.com/contacts/"+userId+"/";

	let contacts={};
	fetch(protectedUrl , {
		method: 'get',
		// mode: 'no-cors',
		// body: JSON.stringify(requestBody),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0B4eXouY29tIiwidXNlcklkIjoiNWUxZmQwNGEyNmZmYWIxMTc4ZTk1ZjBjIiwiaWF0IjoxNTc5MjY3MjY5LCJleHAiOjE1Nzk2OTkyNjl9.TZk8WwldwR3V5Pr9_wzecfMehvruxiDJeaaMVrLsaiI'
		}
	}).then(function(res){
		res.json()
		.then(function(resData){
			// localStorage.setItem("token", resData);
			
			// contacts=resData;
			// resData=JSON.stringify(resData);
			console.log('contacts length: ', resData.contacts.length);
			document.getElementById("container").innerHTML="";
			resData.contacts.map(function(data){
				document.getElementById("container").innerHTML+=
				`
				<div style="margin-left: 20px; margin-right: 20px;" class="card">
					<h6 class="card-header">Emergency Contact-1</h6>
					<div class="card-body">
					<h6 class="card-title">${data.email}</h6>
					<p class="card-text">
						<a href="tel:9999999999">9999999999<>
					</p>
					<!--<button onclick="">Update</button> -->
					<a href="#" class="btn btn-primary">Update</a> 
					</div>
				</div>
				<br />
				`;
			});
			// console.log("resData: ", JSON.stringify(resData));
		});
		// localStorage.setItem("token", res);
	}).catch(function(err){
		// localStorage.setItem("token", err);
		console.log("err: ", err);
	});
};


/*
<div style="margin-left: 20px; margin-right: 20px;" class="card">
	<h6 class="card-header">Emergency Contact-1</h6>
	<div class="card-body">
	<h6 class="card-title">Name ABC</h6>
	<p class="card-text">
		9999999999
	</p>
	<!--<button onclick="">Update</button> -->
	<a href="#" class="btn btn-primary">Update</a> 
	</div>
</div>
*/