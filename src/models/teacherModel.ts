import Sequelize from "sequelize";

import sequelize from "../utils/database";

export const Teacher = sequelize.define("teacher", {
    teacherId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    teacherNo: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    lastName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    title: Sequelize.STRING,
    classCode: Sequelize.STRING,
    specialist: Sequelize.TINYINT.UNSIGNED.ZEROFILL,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    status: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.TINYINT.UNSIGNED,
    }
}, {
    createdAt: false,
    freezeTableName: true,
    tableName: "Teacher",
    timestamps: true,
    updatedAt: "lastUpdatedDate",
});
