// Cargar usuarios desde localStorage o inicializar si no existen
const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

// Función para manejar el inicio de sesión
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
        // Redirigir a otra página
        window.location.href = 'build/pages/inicio.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos';
    }
});

// Función para manejar el registro de nuevos usuarios
function registerUser(username, password) {
    // Verificar si el usuario ya existe
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        return 'El usuario ya existe';
    }

    // Agregar nuevo usuario
    users.push({ username, password });

    // Guardar usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    return 'Registro exitoso';
}

// Manejar el registro de nuevos usuarios
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const registerMessage = document.getElementById('registerMessage');

    const result = registerUser(username, password);
    registerMessage.textContent = result;

    // Limpiar los campos
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
});

// Mostrar/Ocultar formularios
document.getElementById('showRegister').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.register-container').style.display = 'none';
});
