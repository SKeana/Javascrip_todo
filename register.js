document.getElementById('registerForm').addEventListener("submit", function(event) {
    event.preventDefault ();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(user));
    window.location.href = "login.html";
});
