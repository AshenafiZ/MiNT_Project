const sectorModel = require('../models/sectorModel')

const kpas = async (req, res) => {
    try {
        const result = await sectorModel.getKpas(req.params.id);
        res.status(200).json(result) 
    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({message: 'error in fatching kpa'})
    }
}

module.exports = {
    kpas,
}