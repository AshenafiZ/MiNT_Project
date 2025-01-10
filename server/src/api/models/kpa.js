const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Goal = require('./goal');
const User = require('./user');

const Kpa = sequelize.define('Kpa', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
    goal_id: { type: DataTypes.INTEGER, references: { model: Goal, key: 'id' } },
    sector_id: { type: DataTypes.INTEGER, allowNull: true },
    approved_by: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    approved_at: { type: DataTypes.DATE, allowNull: true },
});

module.exports = Kpa;
