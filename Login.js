document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Loginform').addEventListener('submit', login); 
});

function login(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const storedUsername = localStorage.getItem('username'); 
    const storedPassword = localStorage.getItem('password'); 

    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        alert('Log in successful');
        window.location.href = 'Home.html'; 
    } else {
        alert('Username or password is not correct!');
    }
}