const getKpas = async (id) => {
    const [rows] = await pool.query(
        `SELECT 
        k.kpa_id,
        k.title as kpa_title,
        kp.kpi_id,
        kp.title as kpi_title,
        kp.q1,
        kp.q2,
        kp.q3,
        kp.q4,
        kp.a1,
        kp.a2,
        kp.a3,
        kp.a4
        FROM kpas k
        LEFT JOIN kpis kp ON k.kpa_id = kp.kpa_id
        WHERE status = 'approved' and sector_id = ?;`
        , [id])
    const kpaMap = new Map();

    rows.forEach(row => {
        if (!kpaMap.has(row.kpa_id)) {
            kpaMap.set(row.kpa_id, {
                id: row.kpa_id,
                title: row.kpa_title,
                kpis: []
            })
        }
        if (row.kpi_id !== null) {
            const kpa = kpaMap.get(row.kpa_id)
            kpa.kpis.push({
              id: row.kpi_id,
              title: row.kpi_title,
              q1: row.q1 ,
              q2: row.q2 ,
              q3: row.q3,
              q4: row.q4 ,
              a1: row.a1 ,
              a2: row.a2 ,
              a3: row.a3 ,
              a4: row.a4 ,
            });
        }
    });
    return Array.from(kpaMap.values())
}


module.exports = {
    getKpas,
}