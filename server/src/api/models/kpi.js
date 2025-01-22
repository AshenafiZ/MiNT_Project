const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Kpi = sequelize.define('Kpi', {
    title: { type: DataTypes.STRING, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    q1: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    q2: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    q3: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    q4: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    a1: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    a2: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    a3: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    a4: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    kpa_id: { type: DataTypes.INTEGER},
    office_id: { type: DataTypes.INTEGER},
});

module.exports = Kpi;
