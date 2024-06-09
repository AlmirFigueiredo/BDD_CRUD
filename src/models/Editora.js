const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Editora = sequelize.define('Editora', {
    editora_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'editora',
    timestamps: false,
});

module.exports = Editora;
