const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Explicitly using dateOfjoining to avoid any case-sensitivity issues
const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfjoining: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: 'Employees',
    underscored: false
});

module.exports = Employee;
