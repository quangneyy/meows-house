const { Sequelize,DataTypes } = require('sequelize');


const sequelize = new Sequelize(
   'dev-meowhouse-web',
   'dev',
   'AVNS_Rzj0qutG1uW4dJJlsPq',
    {
      host: 'http://db-mysql-meowhouse-vn-do-user-12640654-0.b.db.ondigitalocean.com',
      dialect: 'mysql',
      port: '25060',
    }
);

// var sequelize = new Sequelize('dev-meowhouse-web','dev','AVNS_Rzj0qutG1uW4dJJlsPq',{
//     dialect: 'mysql',
//     host: 'http://db-mysql-meowhouse-vn-do-user-12640654-0.b.db.ondigitalocean.com',
//     port: 25060,
//     logging: false,
//     // dialectOptions: {
//     //   encrypt: true
//     // }
// });

// const sequelize = new Sequelize('meowshouse', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (err) {
        console.error('Unable to connect to the database: ', err);
    }
}

export default connection;