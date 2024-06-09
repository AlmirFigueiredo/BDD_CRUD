const {
    getAllProdutos,
    getProdutoById,
    createProduto,
    deleteProduto,
    updateProduto
} = require('../services/produtoService');

const getAllProdutosController = async (req, res) => {
    try {
        const produtos = await getAllProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const createProdutoController = async (req, res) => {
    try {
        const { nome, descricao, preco_unitario, quantidade, categoria, quantidade_minima } = req.body;

        if (!nome || !descricao || !preco_unitario || !quantidade || !categoria || !quantidade_minima) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newProduto = await createProduto({ nome, descricao, preco_unitario, quantidade, categoria, quantidade_minima });
        res.status(201).json(newProduto);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
};

const getProdutoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await getProdutoById(Number(id));
        if (!produto) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(produto);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

const updateProdutoController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, preco_unitario, quantidade, categoria, quantidade_minima } = req.body;
        const updatedProduto = await updateProduto(Number(id), { nome, descricao, preco_unitario, quantidade, categoria, quantidade_minima });
        if (!updatedProduto) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduto);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

const deleteProdutoController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteProduto(Number(id));
        if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = {
    getAllProdutosController,
    createProdutoController,
    getProdutoByIdController,
    updateProdutoController,
    deleteProdutoController,
};
