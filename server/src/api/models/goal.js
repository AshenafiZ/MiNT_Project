const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');

const Goal = sequelize.define('Goal', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    approved_by: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    approved_at: { type: DataTypes.DATE, allowNull: true },
});

module.exports = Goal;
