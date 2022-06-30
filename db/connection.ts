import {Sequelize} from 'sequelize';

export const db = new Sequelize('curso-node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
