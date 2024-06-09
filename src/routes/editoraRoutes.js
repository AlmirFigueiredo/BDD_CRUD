const { Router } = require('express');
const { 
    getAllEditorasController,
    createEditoraController,
    getEditoraByIdController,
    updateEditoraController,
    deleteEditoraController
} = require('../controllers/editoraController');

const router = Router();

router.get('/', getAllEditorasController);
router.post('/', createEditoraController);
router.get('/:id', getEditoraByIdController);
router.put('/:id', updateEditoraController);
router.delete('/:id', deleteEditoraController);

module.exports = router;
