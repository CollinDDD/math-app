const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const usersService = require("./users.service");



async function create(req, res) {
    const newUser = req.body;
    await usersService.create(newUser);
    res.status(201).json({message: `User: ${newUser} created successfully`});
}

async function readUserData(req, res) {
    const {userId} = req.params;
    res.json({ data: await usersService.readUserData(userId) });
}

async function updateHighScore(req, res, next) {
    const userId = req.params.userId;
    const { user_highscore } = req.body;

    const user = await usersService.readUserData(userId);
    const currentHighScore = user.user_highscore;

    let message;
    if (user_highscore > currentHighScore) {
        await usersService.updateHighScore(userId, user_highscore);
        message = `Your new high score is ${user_highscore}!`;
    } else {
        message = `Your high score is ${currentHighScore}`;
    }

    res.status(200).json({ data: { user_highscore }, message });
}

async function list(req, res) {
    res.json({data: await usersService.list()});
}

module.exports = {
    read: asyncErrorBoundary(readUserData),
    create: asyncErrorBoundary(create),
    update: asyncErrorBoundary(updateHighScore),
    list: asyncErrorBoundary(list)
};