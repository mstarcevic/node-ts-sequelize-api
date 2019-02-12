import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../typings/SequelizeAttributes";
import sequelizeConnection from "../utils/database";

export interface ITeacherAttributes {
    teacherId?: number;
    teacherNo: number;
    firstName: string;
    lastName: string;
    title?: string;
    classCode?: string;
    specialist?: number;
    username?: string;
    password?: string;
    status?: number;
    updatedAt?: string;
}

export interface ITeacherInstance extends Sequelize.Instance<ITeacherAttributes>, ITeacherAttributes {
    // At the moment, there is nothing to add in here...
    // To be used for associations stuff later...
}

export const TeacherFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes):
    Sequelize.Model<ITeacherInstance, ITeacherAttributes> => {
        const attributes: SequelizeAttributes<ITeacherAttributes> = {
            teacherId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            teacherNo: {
                allowNull: false,
                type: DataTypes.NUMERIC,
            },
            firstName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING
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
        };

        const Teacher = sequelize.define<ITeacherInstance, ITeacherAttributes>("Teacher", attributes, {
            createdAt: false,
            freezeTableName: true,
            tableName: "Teacher",
            timestamps: true,
            updatedAt: "lastUpdatedDate",
        });

        return Teacher;
    };

export const teacher = TeacherFactory(sequelizeConnection, Sequelize); 
