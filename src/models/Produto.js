const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    preco_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    quantidade_minima: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'produto',
    timestamps: false,
});

module.exports = Produto;
