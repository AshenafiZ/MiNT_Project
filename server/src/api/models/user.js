const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Role = require('./role');

const User = sequelize.define('User', {
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    sector_id: { type: DataTypes.INTEGER, allowNull: true },
    office_id: { type: DataTypes.INTEGER, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: false },
    profile_photo: { type: DataTypes.BLOB('long'), allowNull: true },
    status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' },
    role_id: { type: DataTypes.INTEGER, allowNull: false },
});

User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
Role.hasMany(User, { foreignKey: 'role_id', as: 'users' });

module.exports = User;
