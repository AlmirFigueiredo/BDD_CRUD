const Editora = require('../models/Editora');

const getAllEditoras = async () => {
    try {
        return await Editora.findAll();
    } catch (error) {
        console.error('Error retrieving editoras:', error);
        throw new Error('Error retrieving editoras');
    }
};

const createEditora = async (editoraData) => {
    try {
        return await Editora.create(editoraData);
    } catch (error) {
        console.error('Error creating editora:', error);
        throw new Error('Error creating editora');
    }
};

const getEditoraById = async (editoraId) => {
    try {
        const editora = await Editora.findByPk(editoraId);
        if (!editora) {
            throw new Error('Editora not found');
        }
        return editora;
    } catch (error) {
        console.error('Error retrieving editora:', error);
        throw new Error('Error retrieving editora');
    }
};

const updateEditora = async (editoraId, updatedData) => {
    try {
        const editora = await Editora.findByPk(editoraId);
        if (!editora) {
            throw new Error('Editora not found');
        }
        return await editora.update(updatedData);
    } catch (error) {
        console.error('Error updating editora:', error);
        throw new Error('Error updating editora');
    }
};

const deleteEditora = async (editoraId) => {
    try {
        const editora = await Editora.findByPk(editoraId);
        if (!editora) {
            throw new Error('Editora not found');
        }
        await editora.destroy();
        return editora;
    } catch (error) {
        console.error('Error deleting editora:', error);
        throw new Error('Error deleting editora');
    }
};

module.exports = {
    getAllEditoras,
    createEditora,
    getEditoraById,
    updateEditora,
    deleteEditora,
};
