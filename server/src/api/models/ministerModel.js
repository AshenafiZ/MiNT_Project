const updateGoal = async (id, goal) => {
    const { status } = goal;
    await pool.query(
      "UPDATE goals SET status = ? WHERE goal_id = ?",
      [status, id]
    );
    return { Goal_ID: id, ...goal };
  };

const updateKpa = async (id, user_id, status, approved_at) => {
    console.log(id, status, user_id, approved_at)
    const [result] = await pool.query(
        "UPDATE kpas SET status = ?, approved_by = ?, approved_at = ? WHERE kpa_id = ?",
        [status, user_id, approved_at, id]
    )
    return result;
}

const approvedKpa = async() => {
    await pool.query(`SELECT * FROM kpas WHERE status= "approved"`);
}

const approvedByMe = async(id) => {
    await pool.query(
        `SELECT * FROM kpas WHERE status = "approved" and approved_by = ?`,
        [id]
    )
}

const rejectedKpa = async() => {
    await pool.query('SELECT * FROM kpas WHERE status = "rejected"');
}

const rejectedByMe = async(id) => {
    const [rows] = await pool.query(
        'SELECT * FROM kpas WHERE status = "rejected" and approved_by = ?',
        [id]
    )
    return rows;
}

const pendingKpa = async () => {
    const [rows] = await pool.query(' SELECT * FROM kpas WHERE status = "pending"');
    return rows;
}


module.exports = {
    updateGoal,
    updateKpa,
    approvedByMe,
    approvedKpa,
    rejectedByMe,
    rejectedKpa,
    pendingKpa,
}