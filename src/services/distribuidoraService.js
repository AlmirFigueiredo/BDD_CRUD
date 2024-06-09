const Distribuidora = require('../models/Distribuidora');

const getAllDistribuidoras = async () => {
    try {
        return await Distribuidora.findAll();
    } catch (error) {
        console.error('Error retrieving distribuidoras:', error);
        throw new Error('Error retrieving distribuidoras');
    }
};

const createDistribuidora = async (distribuidoraData) => {
    try {
        return await Distribuidora.create(distribuidoraData);
    } catch (error) {
        console.error('Error creating distribuidora:', error);
        throw new Error('Error creating distribuidora');
    }
};

const getDistribuidoraById = async (distribuidoraId) => {
    try {
        const distribuidora = await Distribuidora.findByPk(distribuidoraId);
        if (!distribuidora) {
            throw new Error('Distribuidora not found');
        }
        return distribuidora;
    } catch (error) {
        console.error('Error retrieving distribuidora:', error);
        throw new Error('Error retrieving distribuidora');
    }
};

const updateDistribuidora = async (distribuidoraId, updatedData) => {
    try {
        const distribuidora = await Distribuidora.findByPk(distribuidoraId);
        if (!distribuidora) {
            throw new Error('Distribuidora not found');
        }
        return await distribuidora.update(updatedData);
    } catch (error) {
        console.error('Error updating distribuidora:', error);
        throw new Error('Error updating distribuidora');
    }
};

const deleteDistribuidora = async (distribuidoraId) => {
    try {
        const distribuidora = await Distribuidora.findByPk(distribuidoraId);
        if (!distribuidora) {
            throw new Error('Distribuidora not found');
        }
        await distribuidora.destroy();
        return distribuidora;
    } catch (error) {
        console.error('Error deleting distribuidora:', error);
        throw new Error('Error deleting distribuidora');
    }
};

module.exports = {
    getAllDistribuidoras,
    createDistribuidora,
    getDistribuidoraById,
    updateDistribuidora,
    deleteDistribuidora,
};
