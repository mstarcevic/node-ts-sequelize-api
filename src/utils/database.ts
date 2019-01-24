import * as Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_HOST
    }
)

export default sequelize;