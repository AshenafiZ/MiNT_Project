const { Goal, Kpa} = require("../models");

const updateGoal = async (req, res) => {
    const {id} = req.params;
    const {status, user_id} = req.body;
    const approved_at = new Date()
    try {
        const goal = await Goal.update(
            { status, approved_by: user_id, approved_at },
            { where: {id } }
        );
        res.status(200).json({message: "Successfully updated", goal})
    } catch (error) {
        console.error("Error in updating: ",error);
        res.status(500).json({message: 'Error updating status'})
    }
    return 
};

const updateKpa = async (req, res) => {
    const {id} = req.params;
    const {status, user_id} = req.body;
    const approved_at = new Date();
    try {
        const kpa = await Kpa.update(
            { status, approved_by: user_id, approved_at },
            { where: {id } }
        );
        res.status(200).json(kpa)
    } catch (error) {
        console.error('Error in updating: ', error);
        res.status(500).json({message: 'Error updating status'})
    }
};

const approvedKpas = async (req, res) => {
    try {
        const kpas = await Kpa.findAll({ where: { status: 'approved' } })
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
};

const myApprovedKpa = async (req, res) => {
    const {id} = req.params;
    try {
        const kpas = await Kpa.findAll({
            where: {
                status: 'approved',
                approved_by: id,
            },
        });
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
};

const rejectedKpas = async (req, res) => {
    try {
        const kpas = await Kpa.findAll({ where: { status: 'rejected' } });
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
};

const rejectedByMe = async (req, res) => {
    const {id} = req.params;
    try {
        const kpas = await Kpa.findAll({
            where: {
                status: 'rejected',
                approved_by: id,
            },
        });
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
};

const pendingKpas = async (req, res) => {
    try {
        const kpas = await Kpa.findAll({ where: { status: 'pending' } });
        res.status(200).json(kpas)
    } catch (error) {
        console.error('Error in fetching: ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
};



module.exports = {
    updateGoal,
    updateKpa,
    pendingKpas,
    approvedKpas,
    myApprovedKpa,
    rejectedByMe,
    rejectedKpas,
}