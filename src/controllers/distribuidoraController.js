const {
    getAllDistribuidoras,
    getDistribuidoraById,
    createDistribuidora,
    deleteDistribuidora,
    updateDistribuidora
} = require('../services/distribuidoraService');

const getAllDistribuidorasController = async (req, res) => {
    try {
        const distribuidoras = await getAllDistribuidoras();
        res.status(200).json(distribuidoras);
    } catch (error) {
        console.error('Error fetching distribuidoras:', error);
        res.status(500).json({ error: 'Failed to fetch distribuidoras' });
    }
};

const createDistribuidoraController = async (req, res) => {
    try {
        const { distribuidora_id, telefone, rua, endereco_numero, complemento, cidade, bairro, nome_fantasia, email } = req.body;

        if (!distribuidora_id || !telefone || !rua || !endereco_numero || !cidade || !bairro || !nome_fantasia || !email) {
            return res.status(400).json({ error: 'All fields except complemento are required' });
        }

        const newDistribuidora = await createDistribuidora({ distribuidora_id, telefone, rua, endereco_numero, complemento, cidade, bairro, nome_fantasia, email });
        res.status(201).json(newDistribuidora);
    } catch (error) {
        console.error('Error creating distribuidora:', error);
        res.status(500).json({ error: 'Failed to create distribuidora' });
    }
};

const getDistribuidoraByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const distribuidora = await getDistribuidoraById(Number(id));
        if (!distribuidora) {
            return res.status(404).json({ error: 'Distribuidora not found' });
        }
        res.status(200).json(distribuidora);
    } catch (error) {
        console.error('Error fetching distribuidora:', error);
        res.status(500).json({ error: 'Failed to fetch distribuidora' });
    }
};

const updateDistribuidoraController = async (req, res) => {
    try {
        const { id } = req.params;
        const { telefone, rua, endereco_numero, complemento, cidade, bairro, nome_fantasia, email } = req.body;
        const updatedDistribuidora = await updateDistribuidora(Number(id), { telefone, rua, endereco_numero, complemento, cidade, bairro, nome_fantasia, email });
        if (!updatedDistribuidora) {
            return res.status(404).json({ error: 'Distribuidora not found' });
        }
        res.status(200).json(updatedDistribuidora);
    } catch (error) {
        console.error('Error updating distribuidora:', error);
        res.status(500).json({ error: 'Failed to update distribuidora' });
    }
};

const deleteDistribuidoraController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteDistribuidora(Number(id));
        if (!deleted) {
            return res.status(404).json({ error: 'Distribuidora not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting distribuidora:', error);
        res.status(500).json({ error: 'Failed to delete distribuidora' });
    }
};

module.exports = {
    getAllDistribuidorasController,
    createDistribuidoraController,
    getDistribuidoraByIdController,
    updateDistribuidoraController,
    deleteDistribuidoraController,
};
