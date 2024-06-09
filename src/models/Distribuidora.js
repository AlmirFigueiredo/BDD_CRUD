const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Distribuidora = sequelize.define('Distribuidora', {
    distribuidora_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false, 
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco_numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_fantasia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'distribuidora',
    timestamps: false,
});

module.exports = Distribuidora;
