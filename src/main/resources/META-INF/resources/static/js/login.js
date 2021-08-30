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

    const username = document.getElementById("username").value;
    const pass_word = document.getElementById("password").value;

    console.log(username, pass_word);
    console.log('I am in login function');

    fetch("http://localhost:8083/login", {
        	method: "POST",
            headers: {
                   	"Content-Type": "application/json"
                   },
            body: JSON.stringify({
                   	username: username,
                   	pass_word: pass_word
            })
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
           alert('Successfully Signed Up');
           fetch("http://localhost:8083/singup" , {
           			method: "POST",
           			headers: {
           				"Content-Type": "application/json"
           			},
           			body: JSON.stringify({
           				user_name: user_name,
           				email_id: email_id,
           				password: password
           			})
           		})
    }else{
            alert('Password Mis-match');
    }
    //console.log('I am in Signup function');
}