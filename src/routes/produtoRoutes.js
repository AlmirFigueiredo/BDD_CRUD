const { Router } = require('express');
const { 
    getAllProdutosController,
    createProdutoController,
    getProdutoByIdController,
    updateProdutoController,
    deleteProdutoController
} = require('../controllers/produtoController');

const router = Router();

router.get('/', getAllProdutosController);
router.post('/', createProdutoController);
router.get('/:id', getProdutoByIdController);
router.put('/:id', updateProdutoController);
router.delete('/:id', deleteProdutoController);

module.exports = router;
