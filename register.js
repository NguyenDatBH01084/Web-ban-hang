document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', register);
});

function register(event) {
    event.preventDefault(); 

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    // Kiểm tra ô trống
    if (!firstname || !lastname || !username || !email || !address || !phone || !password || !confirm) {
        alert('Please enter your information!');
        return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }

    // Lưu thông tin (demo, không bảo mật)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful');

    window.location.href = 'Login.html';
}
