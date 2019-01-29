import Sequelize from "sequelize";

import sequelize from "../utils/database";

export const Student = sequelize.define("student", {
    studentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    casesId: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    lastName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    preferredName: Sequelize.STRING,
    birthdate: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    gender: {
        allowNull: false,
        type: Sequelize.CHAR,
    },
    homeGroup: Sequelize.STRING,
    status: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.TINYINT.UNSIGNED,
    }
}, {
    createdAt: false,
    freezeTableName: true,
    tableName: "Student",
    timestamps: true,
    updatedAt: "lastUpdatedDate",
});
