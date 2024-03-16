/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const sample = [
  {
      user_id: "999",
      user_name: "Sally",
      user_password: "sally123",
      user_highscore: 30,
  },
  {
      user_id: "1000",
      user_name: "Tim",
      user_password: "tim123",
      user_highscore: 40,
  }
];

exports.seed = function(knex) {
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert(sample);
    });
};
