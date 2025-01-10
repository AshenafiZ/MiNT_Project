const updateGoal = async (id, user_id, status, approved_at) => {
    const [result] = await pool.query(
      "UPDATE goals SET status = ?, approved_by = ?, approved_at = ? WHERE goal_id = ?",
      [status, user_id, approved_at, id]
    );
    return result;
  };

const updateKpa = async (id, user_id, status, approved_at) => {
    const [result] = await pool.query(
        "UPDATE kpas SET status = ?, approved_by = ?, approved_at = ? WHERE kpa_id = ?",
        [status, user_id, approved_at, id]
    )
    return result;
}

const approvedKpa = async() => {
    const [result] = await pool.query(`SELECT * FROM kpas WHERE status= "approved"`);
    return result;
}

const approvedByMe = async(id) => {
    const [result] = await pool.query(
        `SELECT * FROM kpas WHERE status = "approved" and approved_by = ?`,
        [id]
    );
    return result;
}

const rejectedKpa = async() => {
    const [result] = await pool.query('SELECT * FROM kpas WHERE status = "rejected"');
    return result;
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