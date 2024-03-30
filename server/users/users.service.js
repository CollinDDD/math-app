const knex = require("../db/connection");

function create(newUser) {
    return knex("users")
        .insert(newUser);
}

async function readUserData(userId) {
    return knex("users")
        .select("*")
        .where({user_id: userId})
        .first();
}

async function checkLogin(username, password) {
    return knex("users")
        .select("*")
        .where({ user_name: username, user_password: password })
        .first();
}

async function updateHighScore(userId, newHighScore) {
    return knex("users")
        .where({ user_id: userId})
        .update({user_highscore: newHighScore});
}

async function list() {
    return knex("users")
        .select("*")
}

module.exports = {
    readUserData,
    create,
    updateHighScore,
    list,
    checkLogin
};