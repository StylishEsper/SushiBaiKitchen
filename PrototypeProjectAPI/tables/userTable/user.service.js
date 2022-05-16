const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');

module.exports = { register, login }

async function register(params){
    //make sure its unique
    console.log(params);
    /*if(await db.tblUsers.findOne({where: {email: params.email}})){
        throw 'Email already exists. '
    }*/

    await db.register(params);
}

async function login(params){
    //make sure its unique
    console.log(params);
    /*if(await db.tblUsers.findOne({where: {email: params.email}})){
        throw 'Email already exists. '
    }*/

    await db.login(params);
}