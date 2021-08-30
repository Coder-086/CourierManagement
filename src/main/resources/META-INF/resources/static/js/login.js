const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function login(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email, password);

    fetch("http://localhost:8083/login", {
    	method: "POST",
    	headers: {
    		"Content-Type": "application/json"
    	},
    		body: JSON.stringify({email, password, username: ""})
    	}).then(data => data).then(res => {
    		console.log(res);
    		if (res.status == 200) {
    			alert('Logged In Successfully!!!');
    		} else {
    			alert('User Registration Failed' + res.statusText);
    		}
    	}).catch(err => {
    		alert('Account Doesnt Exists');
    	})

}

function signup(event){
    event.preventDefault();

    const user_name = document.getElementById("Username").value;
    const email_id  = document.getElementById("Email").value;
    const password  = document.getElementById("Password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    console.log(user_name, email_id, password);

    if(password == confirm_password){
           fetch("http://localhost:8083/signup" , {
           			method: "POST",
           			headers: {
           				"Content-Type": "application/json"
           			},
           			body: JSON.stringify({
           				username: user_name,
           				email: email_id,
           				password: password
           			})
           		}).then(data => data).then(res => {
                  	console.log(res);
               		if (res.status == 200) {
                  			alert('User Registered Successfully!!!');
                  	} else {
                  			alert('User Registration Failed' + res.statusText);
                  	}
                }).catch(err => {
                  		alert('Account Exists');
                })
    }else{
            alert('Password Mis-match');
    }
    //console.log('I am in Signup function');
}