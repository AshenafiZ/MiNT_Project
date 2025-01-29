const { Kpi } = require("../models");
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

const getAllKpis = async (req, res) => {
    try {
      const { id } = req.params;  
      const kpiWhereClause = id ? { office_id: id } : {}; 
  
      const kpis = await Kpi.findAll({
        where: kpiWhereClause, 
        order: [["createdAt", "DESC"]], 
      });
  
      const transformedKpis = kpis.map((kpi) => ({
          id: kpi.id,
          title: kpi.title,
          unit: kpi.unit,
          year: gregorianToEthiopianYear(kpi.createdAt), 
          q1: parseFloat( kpi.q1),
          q2: parseFloat( kpi.q2),
          q3: parseFloat( kpi.q3),
          q4: parseFloat( kpi.q4),
          target:  parseFloat((kpi.q1) || 0) +  parseFloat((kpi.q2) || 0) +  parseFloat((kpi.q3) || 0) +  parseFloat((kpi.q4) || 0),
          a1: parseFloat( kpi.a1),
          a2: parseFloat( kpi.a2),
          a3: parseFloat( kpi.a3),
          a4: parseFloat( kpi.a4),
          achieved:  parseFloat((kpi.a1) || 0) +  parseFloat((kpi.a2) || 0) +  parseFloat((kpi.a3) || 0) +  parseFloat((kpi.a4) || 0),
          kpa_id: kpi.kpa_id,
          office_id: kpi.office_id,
          createdAt: kpi.createdAt, 
          updatedAt: kpi.updatedAt,
        }));  
      res.status(200).json(transformedKpis);
    } catch (error) {
      console.error("Error fetching KPIs:", error);
      res.status(500).json({ message: "Error fetching KPIs." });
    }
  };
 

module.exports = {
    getAllKpis
}