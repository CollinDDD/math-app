const knex = require("../db/connection");


function list() {
    return knex("users")
        .select("*");
}

function create(newUser) {
    return knex("users")
        .insert(newUser);
}
module.exports = {
    list,
    create
};