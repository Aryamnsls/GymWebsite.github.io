function index() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "user") {
        window.location.assign("index1.html");
        alert("Login Succesful");


    } else {
        alert("Login Failed");
        return;
    }



}