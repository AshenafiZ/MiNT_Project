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

const getAllKpas = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
  
      const kpaWhereClause = id ? { sector_id: id } : {}; 
  
      const kpas = await Kpa.findAll({
        where: kpaWhereClause, 
        include: [
          {
            model: Kpi, 
            as: "kpis",
            required: false, 
            order: [["createdAt", "DESC"]], 
          },
        ],
        order: [["createdAt", "DESC"]], 
      });
  
      const transformedKpas = kpas.map((kpa) => ({
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
          q1: parseFloat(  kpi.q1),
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
        })),
      }));
  
      res.status(200).json(transformedKpas);
    } catch (error) {
      console.error("Error fetching KPAs:", error);
      res.status(500).json({ message: "Error fetching KPAs." });
    }
  };
const assign = async(req, res) => {
  const {id} = req.params;
  const {office} = req.body;
  try {
    const kpi = await Kpi.update(
      {office_id: office},
      {where: {id}}
    )
    res.status(200).json({kpi, success: true, message: 'Kpi assigned successfully.'})
  } catch (error) {
    console.error('Error in updating: ', error);
    res.status(500).json({message: 'Error assigning KPI '})
  }
} 

module.exports = {
    getAllKpas, assign
}