const Goal = require("./goal");
const Kpa = require("./kpa");
const Kpi = require("./kpi");
const User = require("./user");

// Goal <-> Kpa
Goal.hasMany(Kpa, { foreignKey: "goal_id", as: "kpas" });
Kpa.belongsTo(Goal, { foreignKey: "goal_id", as: "goal" });

// Kpa <-> Kpi
Kpa.hasMany(Kpi, { foreignKey: "kpa_id", as: "kpis" });
Kpi.belongsTo(Kpa, { foreignKey: "kpa_id", as: "kpa" });

// Goal <-> User
Goal.belongsTo(User, { foreignKey: "approved_by", as: "approvedBy" });
User.hasMany(Goal, { foreignKey: "approved_by", as: "approvedGoals" });

// Kpa <-> User
Kpa.belongsTo(User, { foreignKey: "approved_by", as: "approvedBy" });
User.hasMany(Kpa, { foreignKey: "approved_by", as: "approvedKpas" });

// Kpi <-> User (Optional)
// Kpi.belongsTo(User, { foreignKey: "office_id", as: "office" });
// User.hasMany(Kpi, { foreignKey: "office_id", as: "kpiOffices" });

module.exports = { Goal, Kpa, Kpi, User };

