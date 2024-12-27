const getAllGoals = async () => {
  const [rows] = await pool.query(`SELECT 
            g.Goal_ID, 
            g.Title AS Goal_Title,
            k.KPA_ID, 
            k.Title AS KPA_Title,
            kp.KPI_ID, 
            kp.Title AS KPI_Title, 
            kp.Q1, 
            kp.Q2, 
            kp.Q3, 
            kp.Q4, 
            kp.target, 
            kp.A1, 
            kp.A2, 
            kp.A3, 
            kp.A4, 
            kp.achieved
        FROM Goals g
        LEFT JOIN Kpas k ON g.Goal_ID = k.Goal_ID
        LEFT JOIN kpis kp ON k.KPA_ID = kp.KPA_ID;`);
  
  const goals = [];
  const goalMap = new Map();

  rows.forEach(row => {
    // Create goal object if it doesn't exist
    if (!goalMap.has(row.Goal_ID)) {
      goalMap.set(row.Goal_ID, {
        id: row.Goal_ID,
        title: row.Goal_Title,
        kpas: []
      });
    }

    // Create KPA object if it doesn't exist
    const goal = goalMap.get(row.Goal_ID);
    let kpa = goal.kpas.find(k => k.id === row.KPA_ID);
    
    if (!kpa && row.KPA_ID !== null) {
      kpa = {
        id: row.KPA_ID,
        title: row.KPA_Title,
        kpis: []  // Empty array if no KPIs
      };
      goal.kpas.push(kpa);
    }

    // Add KPI to the KPA if it exists
    if (row.KPI_ID !== null) {
      kpa.kpis.push({
        id: row.KPI_ID,
        title: row.KPI_Title,
        Q1: row.Q1 ,  // Default to empty array if no data
        Q2: row.Q2 ,  // Default to empty array if no data
        Q3: row.Q3,  // Default to empty array if no data
        Q4: row.Q4 ,  // Default to empty array if no data
        target: row.target,  // Default to empty array if no data
        A1: row.A1 ,  // Default to empty array if no data
        A2: row.A2 ,  // Default to empty array if no data
        A3: row.A3 ,  // Default to empty array if no data
        A4: row.A4 ,  // Default to empty array if no data
        achieved: row.achieved  // Default to empty array if no data
      });
    }
  });

  // Convert the map values to an array and return
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
  const {title, Q1, Q2, Q3, Q4, target, kpa_id} = kpi;
  console.log(kpi);
  const [result] = await pool.query(
    "INSERT INTO kpis (Title, Q1, Q2, Q3, Q4, Target, kpa_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, Q1, Q2, Q3, Q4, target, kpa_id]
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
