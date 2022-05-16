const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        userID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        firstName: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        lastName: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        phone: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        password: {type: DataTypes.STRING, primaryKey: false, allowNull: false},
        isActive: {type: DataTypes.BOOLEAN, primaryKey: false, allowNull: false},
    }

    const options = {
        timestamps: false
    }

    return sequelize.define('tblUser', attributes, options)
}