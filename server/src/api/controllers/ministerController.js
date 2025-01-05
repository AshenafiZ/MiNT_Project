const { response } = require('express');
const ministerModel = require('../models/ministerModel');

const updateGoal = async (req, res) => {
    const {id} = req.params;
    const {status, user_id} = req.body;
    const approved_at = new Date()
    try {
        await ministerModel.updateGoal(id, user_id, status, approved_at);
        res.status(200).json({message: "Successfully updated"})
    } catch (error) {
        console.error("Error in updating: ",error);
        res.status(500).json({message: 'Error updating status'})
    }
}

const updateKpa = async (req, res) => {
    const {id} = req.params;
    const {status, user_id} = req.body;
    const approved_at = new Date();
    try {
        const kpa = await ministerModel.updateKpa(id, user_id, status, approved_at);
        res.status(200).json(kpa)
    } catch (error) {
        console.error('Error in updating: ', error);
        res.status(500).json({message: 'Error updating status'})
    }
}

const pendingKpas = async (req, res) => {
    try {
        const kpas = await ministerModel.pendingKpa();
        res.status(200).json(kpas)
    } catch (error) {
        console.error('Error in fetching: ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
}

const approvedKpas = async (req, res) => {
    try {
        const kpas = await ministerModel.approvedKpa();
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
}

const myApprovedKpa = async (req, res) => {
    try {
        const kpas = await ministerModel.approvedByMe();
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
}

const rejectedKpas = async (req, res) => {
    try {
        const kpas = await ministerModel.rejectedKpa();
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
}

const rejectedByMe = async (req, res) => {
    try {
        const kpas = await ministerModel.rejectedByMe();
        res.status(200).json(kpas);
    } catch (error) {
        console.error('Error ', error)
        res.status(500).json({message: 'Error in fetching KPAs'})
    }
}


module.exports = {
    updateGoal,
    updateKpa,
    pendingKpas,
    approvedKpas,
    myApprovedKpa,
    rejectedByMe,
    rejectedKpas,
}