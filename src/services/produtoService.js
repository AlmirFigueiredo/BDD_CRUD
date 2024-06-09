const Produto = require('../models/Produto');

const getAllProdutos = async () => {
    try {
        return await Produto.findAll();
    } catch (error) {
        console.error('Error retrieving products:', error);
        throw new Error('Error retrieving products');
    }
};

const createProduto = async (produtoData) => {
    try {
        return await Produto.create(produtoData);
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Error creating product');
    }
};

const getProdutoById = async (produtoId) => {
    try {
        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            throw new Error('Product not found');
        }
        return produto;
    } catch (error) {
        console.error('Error retrieving product:', error);
        throw new Error('Error retrieving product');
    }
};

const updateProduto = async (produtoId, updatedData) => {
    try {
        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            throw new Error('Product not found');
        }
        return await produto.update(updatedData);
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Error updating product');
    }
};

const deleteProduto = async (produtoId) => {
    try {
        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            throw new Error('Product not found');
        }
        await produto.destroy();
        return produto;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Error deleting product');
    }
};

module.exports = {
    getAllProdutos,
    createProduto,
    getProdutoById,
    updateProduto,
    deleteProduto,
};
