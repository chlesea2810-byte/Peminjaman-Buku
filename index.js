document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Username & password contoh
    if (username === "chelsea" && password === "2810") {
        window.location.href = "beranda.html";
    } else {
        message.style.color = "red";
        message.innerHTML = "Username atau password salah!";
    }
});
