const EthiopianDate = require('ethiopian-date');
const getAllGoals = async () => {
  const [rows] = await pool.query(`SELECT 
            g.goal_id, 
            g.title AS goal_title,
            k.kpa_id, 
            k.status,
            k.title AS kpa_title,
            kp.kpi_id, 
            kp.title AS kpi_title, 
            kp.q1, 
            kp.q2, 
            kp.q3, 
            kp.q4, 
            kp.target, 
            kp.a1, 
            kp.a2, 
            kp.a3, 
            kp.a4, 
            kp.achieved
        FROM Goals g
        LEFT JOIN Kpas k ON g.goal_id = k.goal_id
        LEFT JOIN kpis kp ON k.kpa_id = kp.kpa_id;`);
  
  const goalMap = new Map();

  rows.forEach(row => {
    if (!goalMap.has(row.goal_id)) {
      goalMap.set(row.goal_id, {
        id: row.goal_id,
        title: row.goal_title,
        kpas: []
      });
    }

    const goal = goalMap.get(row.goal_id);
    let kpa = goal.kpas.find(k => k.id === row.kpa_id);
    
    if (!kpa && row.kpa_id !== null) {
      kpa = {
        id: row.kpa_id,
        title: row.kpa_title,
        status: row.status,
        kpis: []  
      };
      goal.kpas.push(kpa);
    }

    if (row.kpi_id !== null) {
      kpa.kpis.push({
        id: row.kpi_id,
        title: row.kpi_title,
        q1: row.q1 ,
        q2: row.q2 ,
        q3: row.q3,
        q4: row.q4 ,
        target: row.target,
        a1: row.a1 ,
        a2: row.a2 ,
        a3: row.a3 ,
        a4: row.a4 ,
        achieved: row.achieved
      });
    }
  });


  return Array.from(goalMap.values());
};

const getGoalById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM goals WHERE Goal_ID = ?", [id]);
  return rows[0];
};

const createGoal = async (goal) => {
  const { Title, Description} = goal;
  const [result] = await pool.query(
    "INSERT INTO goals (Title, Description) VALUES (?, ?)",
    [Title, Description]
  );
  return { Goal_ID: result.insertId, ...goal };
};

const updateGoal = async (id, goal) => {
  const { Title, Description, Status } = goal;
  await pool.query(
    "UPDATE goals SET Title = ?, Description = ?, Status = ? WHERE Goal_ID = ?",
    [Title, Description, Status, id]
  );
  return { Goal_ID: id, ...goal };
};

const deleteGoal = async (id) => {
  await pool.query("DELETE FROM goals WHERE Goal_ID = ?", [id]);
};

const createKpa = async (kpa) => {
  const { title, description, goal_id} = kpa;
  const [result] = await pool.query(
    "INSERT INTO kpas (Title, Description, Goal_ID) VALUES (?, ?, ?)",
    [title, description, goal_id]
  );
  return { kpa_id: result.insertId, ...kpa };
};

const createKpi = async (kpi) => {
  const {title, q1, q2, q3, q4, target, kpa_id} = kpi;
  console.log(kpi);
  const [result] = await pool.query(
    "INSERT INTO kpis (Title, q1, q2, q3, q4, target, kpa_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, q1, q2, q3, q4, target, kpa_id]
  );
  return { Kpi_ID: result.insertId, ...kpi };
};

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
  createKpa,
  createKpi,
};
