const { Router } = require('express');
const { 
    getAllDistribuidorasController,
    createDistribuidoraController,
    getDistribuidoraByIdController,
    updateDistribuidoraController,
    deleteDistribuidoraController
} = require('../controllers/distribuidoraController');

const router = Router();

router.get('/', getAllDistribuidorasController);
router.post('/', createDistribuidoraController);
router.get('/:id', getDistribuidoraByIdController);
router.put('/:id', updateDistribuidoraController);
router.delete('/:id', deleteDistribuidoraController);

module.exports = router;
