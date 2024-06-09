const {
    getAllEditoras,
    getEditoraById,
    createEditora,
    deleteEditora,
    updateEditora
} = require('../services/editoraService');

const getAllEditorasController = async (req, res) => {
    try {
        const editoras = await getAllEditoras();
        res.status(200).json(editoras);
    } catch (error) {
        console.error('Error fetching editoras:', error);
        res.status(500).json({ error: 'Failed to fetch editoras' });
    }
};

const createEditoraController = async (req, res) => {
    try {
        const { editora_id, rua, endereco_numero, complemento, cidade, bairro, email, telefone, nome } = req.body;

        if (!editora_id || !rua || !endereco_numero || !cidade || !bairro || !email || !telefone || !nome) {
            return res.status(400).json({ error: 'All fields except complemento are required' });
        }

        const newEditora = await createEditora({ editora_id, rua, endereco_numero, complemento, cidade, bairro, email, telefone, nome });
        res.status(201).json(newEditora);
    } catch (error) {
        console.error('Error creating editora:', error);
        res.status(500).json({ error: 'Failed to create editora' });
    }
};

const getEditoraByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const editora = await getEditoraById(Number(id));
        if (!editora) {
            return res.status(404).json({ error: 'Editora not found' });
        }
        res.status(200).json(editora);
    } catch (error) {
        console.error('Error fetching editora:', error);
        res.status(500).json({ error: 'Failed to fetch editora' });
    }
};

const updateEditoraController = async (req, res) => {
    try {
        const { id } = req.params;
        const { rua, endereco_numero, complemento, cidade, bairro, email, telefone, nome } = req.body;
        const updatedEditora = await updateEditora(Number(id), { rua, endereco_numero, complemento, cidade, bairro, email, telefone, nome });
        if (!updatedEditora) {
            return res.status(404).json({ error: 'Editora not found' });
        }
        res.status(200).json(updatedEditora);
    } catch (error) {
        console.error('Error updating editora:', error);
        res.status(500).json({ error: 'Failed to update editora' });
    }
};

const deleteEditoraController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteEditora(Number(id));
        if (!deleted) {
            return res.status(404).json({ error: 'Editora not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting editora:', error);
        res.status(500).json({ error: 'Failed to delete editora' });
    }
};

module.exports = {
    getAllEditorasController,
    createEditoraController,
    getEditoraByIdController,
    updateEditoraController,
    deleteEditoraController,
};
