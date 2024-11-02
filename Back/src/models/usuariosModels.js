const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConfig.js');
// const bcrypt = require('bcrypt');

// Define el modelo Usuario
const Usuario = sequelize.define('usuarios', {
    // Define los atributos del modelo
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que los nombres de usuario sean únicos
        validate: {
            // Valida que el valor sea una cadena de texto
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo validate debe ser una cadena de texto.');
                }
            }
        }
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Valida que el valor sea una cadena de texto
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo rol debe ser una cadena de texto.');
                }
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Valida que el valor sea una cadena de texto
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo password debe ser una cadena de texto.');
                }
            }
        }
    },
    fecha_subida: {
        type: DataTypes.DATE, // Usar DATEONLY para almacenar solo fechas
        allowNull: false,
        defaultValue: DataTypes.NOW,

    }
}, {
    schema: 'usuarios',
    tableName: 'usuarios', // Asegúrate de que este nombre coincida con el de tu tabla en la base de datos
    timestamps: false // Cambia esto si estás usando timestamps
});

module.exports = Usuario;















// users = [
//     {
//         "id": 1,
//         "username": "juan123",
//         "password": "password123"
//     },
//     {
//         "id": 2,
//         "username": "maria456",
//         "password": "securepass456"
//     },
//     {
//         "id": 3,
//         "username": "carlos789",
//         "password": "mypassword789"
//     },
//     {
//         "id": 4,
//         "username": "ana101",
//         "password": "passcode101"
//     },
//     {
//         "id": 5,
//         "username": "luis202",
//         "password": "strongpass202"
//     }
// ]

// module.exports = users;
