const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConfig.js'); // Asegúrate de que esta ruta coincida con la configuración de tu base de datos

// Define el modelo Articulo
const Articulo = sequelize.define('articulos', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo titulo debe ser una cadena de texto.');
                }
            }
        }
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo autor debe ser una cadena de texto.');
                }
            }
        }
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    fecha: {
        type: DataTypes.DATEONLY, // Guarda solo la fecha (sin la hora)
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    schema: 'articulos',
    tableName: 'articulos', // Asegúrate de que coincida con el nombre de tu tabla en la base de datos
    timestamps: false
});

module.exports = Articulo;
