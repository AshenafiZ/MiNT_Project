const { Goal, Kpa, Kpi } = require("../models");
const { toEthiopian } = require("ethiopian-date"); 

const gregorianToEthiopianYear = (createdAt) => {
  if (isNaN(createdAt.getTime())) {
    throw new Error("Invalid Date provided");
  }
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1; 
  const date = createdAt.getDate();
  const ethiopianDate = toEthiopian(year, month, date); 
  return ethiopianDate[0]; 
};

const getAllGoals = async (req, res) => {
  try {
    const { year } = req.query;

    const kpiWhereClause = year ? { year: year } : {}; 

    const goals = await Goal.findAll({
      include: [
        {
          model: Kpa,
          as: "kpas",
          include: [
            {
              model: Kpi,
              as: "kpis",
              where: kpiWhereClause, 
              required: false, 
              order: [["createdAt", "DESC"]], 
            },
          ],
          order: [["createdAt", "DESC"]], 
        },
      ],
      order: [["createdAt", "DESC"]], 
    });

    const transformedGoals = goals.map((goal) => ({
      id: goal.id,
      title: goal.title,
      description: goal.description,
      status: goal.status,
      approved_by: goal.approved_by,
      approved_at: goal.approved_at,
      createdAt: goal.createdAt,
      updatedAt: goal.updatedAt,
      kpas: goal.kpas.map((kpa) => ({
        id: kpa.id,
        title: kpa.title,
        description: kpa.description,
        status: kpa.status,
        goal_id: kpa.goal_id,
        approved_by: kpa.approved_by,
        approved_at: kpa.approved_at,
        createdAt: kpa.createdAt,
        updatedAt: kpa.updatedAt,
        kpis: kpa.kpis.map((kpi) => ({
          id: kpi.id,
          title: kpi.title,
          unit: kpi.unit,
          year: gregorianToEthiopianYear(kpi.createdAt), 
          q1: kpi.q1,
          q2: kpi.q2,
          q3: kpi.q3,
          q4: kpi.q4,
          yearly: (kpi.q1 || 0) + (kpi.q2 || 0) + (kpi.q3 || 0) + (kpi.q4 || 0),
          a1: kpi.a1,
          a2: kpi.a2,
          a3: kpi.a3,
          a4: kpi.a4,
          target: (kpi.a1 || 0) + (kpi.a2 || 0) + (kpi.a3 || 0) + (kpi.a4 || 0),
          kpa_id: kpi.kpa_id,
          office_id: kpi.office_id,
          createdAt: kpi.createdAt,
          updatedAt: kpi.updatedAt,
        })),
      })),
    }));

    res.status(200).json(transformedGoals);
  } catch (error) {
    console.error("Error fetching goals:", error);
    res.status(500).json({ message: "Error fetching goals." });
  }
};

const createGoal = async (req, res) => {
  try {
    const { title, description, approved_by } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required." });
    }

    const newGoal = await Goal.create({
      title,
      description,
      approved_by,
      approved_at: approved_by ? new Date() : null, 
    });

    res.status(201).json({
      message: "Goal created successfully.",
      goal: newGoal,
    });
  } catch (error) {
    console.error("Error creating goal:", error);
    res.status(500).json({ message: "Error creating goal." });
  }
};


const addKpa = async (req, res) => {
  try {
    const { goalId } = req.params; 
    const { title, description, status, approved_by } = req.body;


    if (!title) {
      return res.status(400).json({ message: "Title is required for KPA." });
    }

    const goal = await Goal.findByPk(goalId);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found." });
    }

    const newKpa = await Kpa.create({
      title,
      description,
      status,
      goal_id: goal.id, 
      approved_by,
      approved_at: approved_by ? new Date() : null, 
    });

    res.status(201).json({
      message: "KPA added successfully to the Goal.",
      kpa: newKpa,
    });
  } catch (error) {
    console.error("Error adding KPA to goal:", error);
    res.status(500).json({ message: "Error adding KPA to goal." });
  }
};


const addKpi = async (req, res) => {
  try {
    const { kpaId } = req.params; 
    console.log(kpaId)
    const { title, unit, q1, q2, q3, q4, a1, a2, a3, a4, office_id } = req.body;

    
    if (!title ) {
      return res.status(400).json({ message: "Title, unit, and year are required for KPI." });
    }


    const kpa = await Kpa.findByPk(kpaId);
    console.log(kpaId)

    if (!kpa) {
      return res.status(404).json({ message: "KPA not found." });
    }


    const newKpi = await Kpi.create({
      title,
      unit,
      q1,
      q2,
      q3,
      q4,
      a1,
      a2,
      a3,
      a4,
      kpa_id: kpa.id, 
      office_id,
    });

    res.status(201).json({
      message: "KPI added successfully to the KPA.",
      kpi: newKpi,
    });
  } catch (error) {
    console.error("Error adding KPI to KPA:", error);
    res.status(500).json({ message: "Error adding KPI to KPA." });
  }
};



module.exports = { getAllGoals, createGoal, addKpa, addKpi };


