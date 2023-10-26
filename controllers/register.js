function register() {
    let Username = document.getElementById ("login-button");
    let Password = document.getElementById ("password-button");

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var newUser = {
    name: Username,
    password: Password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    Swal.fire(
    'Good job!',
    'WELCOME!!!',
    'success'
    )
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
    let ok= document.getElementsByClassName("swal2-confirm")
    ok.addEventListener("click",function(){
        window.location.href="login.html";
    })