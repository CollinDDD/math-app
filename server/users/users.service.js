const knex = require("../db/connection");

function create(newUser) {
    return knex("users")
        .insert(newUser);
}

function readUserData(userId) {
    return knex("users")
        .select("*")
        .where({user_id: userId})
        .first();
}

function updateHighScore(userId, newHighScore) {
    return knex("users")
        .where({ user_id: userId})
        .update({user_highscore: newHighScore});
}

function list() {
    return knex("users")
        .select("*")
}

module.exports = {
    readUserData,
    create,
    updateHighScore,
    list
};