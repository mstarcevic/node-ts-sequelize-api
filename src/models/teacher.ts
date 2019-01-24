import Sequelize from "sequelize";

import sequelize from "../utils/database";

const Teacher = sequelize.define("Teacher", {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    lastUpdatedDate: 'updateTimestamp',

    teacherId: {
    	type: Sequelize.INTEGER,
    	autoIncrement: true,
    	allowNull: false,
    	primaryKey: true
    },
    teacherNo: {
    	type: Sequelize.INTEGER,
    	allowNull: false,
    },
    firstName: {
    	type: Sequelize.STRING,
    	allowNull: false
    },
    lastName: {
    	type: Sequelize.STRING,
    	allowNull: false
    },
    title: Sequelize.STRING,
    classCode: Sequelize.STRING,
    specialist: Sequelize.TINYINT.UNSIGNED.ZEROFILL,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    status: {
    	type: Sequelize.TINYINT.UNSIGNED,
    	allowNull: false,
    	defaultValue: 1
    },
})