const users = [
    { username: 'admin', password: '1234' },
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Verificar si el usuario existe en la lista
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        message.style.color = 'green';
        message.textContent = 'Inicio de sesión exitoso';
        // Aquí puedes redirigir a otra página
        window.location.href = 'build/pages/inicio.html'; // Descomenta para redirigir
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos';
    }
});