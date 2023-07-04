document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    if (username === "your_username" && password === "your_password") {
        var userInfo = {
            username: username,
            password: password
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.href = "todo.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
