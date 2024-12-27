const strategyModel = require("../models/strategyModel");

// Get all goals
const getGoals = async (req, res) => {
  try {
    const goals = await strategyModel.getAllGoals();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching goals." });
  }
};

// Get a single goal
const getGoal = async (req, res) => {
  try {
    const goal = await strategyModel.getGoalById(req.params.id);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found." });
    }
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Error fetching goal." });
  }
};

// Create a new goal
const createGoal = async (req, res) => {
  try {
    const goal = await strategyModel.createGoal(req.body);
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Error creating goal." });
  }
};

// Update a goal
const updateGoal = async (req, res) => {
  try {
    const goal = await strategyModel.getGoalById(req.params.id);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found." });
    }
    const updatedGoal = await strategyModel.updateGoal(req.params.id, req.body);
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: "Error updating goal." });
  }
};

// Delete a goal
const deleteGoal = async (req, res) => {
  try {
    const goal = await strategyModel.getGoalById(req.params.id);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found." });
    }
    await goalModel.deleteGoal(req.params.id);
    res.status(200).json({ message: "Goal deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting goal." });
  }
};

const createKpa = async (req, res) => {
  try {
    const kpa = await strategyModel.createKpa(req.body);
    res.status(201).json(kpa);
  } catch (error) {
    console.error('Database error: ', error)
    res.status(500).json({ message: "Error creating kpa." });
  }
};

const createKpi = async (req, res) => {
  try {
    const kpi = await strategyModel.createKpi(req.body);
    res.status(201).json(kpi);
  } catch (error) {
    console.error('Database error: ', error)
    res.status(500).json({ message: "Error creating kpa." });
  }
};

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
  createKpa,
  createKpi
};
