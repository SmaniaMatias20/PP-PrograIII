const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbConfig.js');

// Define el modelo Propiedad
const Propiedad = sequelize.define('propiedades', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo nombre debe ser una cadena de texto.');
                }
            }
        }
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0
        }
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cantidad_baños: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    cantidad_dormitorios: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    cantidad_estacionamientos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            esString(value) {
                if (typeof value !== 'string') {
                    throw new Error('El campo ubicacion debe ser una cadena de texto.');
                }
            }
        }
    },
    reservada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    schema: 'propiedades',
    tableName: 'propiedades', // Asegúrate de que coincida con el nombre de tu tabla en la base de datos
    timestamps: false
});

module.exports = Propiedad;
