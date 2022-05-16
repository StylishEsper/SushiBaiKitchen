const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = { initialize, register, login };

initialize();

async function initialize(){
    //create db if it does not already exist
    const {host, port, user, password, database} = config.database;
    const connection = await mysql.createConnection({host,port,user,password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //connect to db
    const sequelize = new Sequelize(database, user, password, {dialect:'mysql'});

    //init the models
    db.tblUser = require('../tables/userTable/user.model.js')(sequelize);
    //associations

    //sync all modules with the db
    await sequelize.sync();
}

async function register(params){
    const {host, port, user, password, database} = config.database;
    const connection = await mysql.createConnection({host,port,user,password});
    await connection.query("INSERT INTO sushibaidb.tblusers (userID, email, firstName, lastName, " +
    "phone, password, isActive) VALUES (DEFAULT,'" + params.email + "','" + params.firstName + "','" +
    params.lastName + "','" + params.phone + "','" + params.password + "','" + params.isActive + "')");

    const sequelize = new Sequelize(database, user, password, {dialect:'mysql'});

    await sequelize.sync();
}

async function login(params){
    const {host, port, user, password, database} = config.database;
    const connection = await mysql.createConnection({host,port,user,password});
    var a = await connection.query("SELECT email, password FROM sushibaidb.tblusers WHERE email = '" + 
    params.email + "' AND password = '" + params.password + "'").then(() => (error, rows) => {
        if (error) throw error;
        console.log("Response: ", rows);});
    const sequelize = new Sequelize(database, user, password, {dialect:'mysql'});

    await sequelize.sync();
}