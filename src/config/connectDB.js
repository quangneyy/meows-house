const { Sequelize } = require('sequelize');

const sequelize = Sequelize('meowshouse', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (err) {
        console.error('Unable to connect to the database: ', err);
    }
}

export default connect;