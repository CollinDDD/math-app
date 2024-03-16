const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const usersService = require("./users.service");


async function list(req, res) {
    res.json({ data: await usersService.list() });
}

async function create(req, res) {
    const newUser = req.body;
    await usersService.create(newUser);
    res.status(201).json({message: `User: ${newUser} created successfully`});
}



module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create)
};