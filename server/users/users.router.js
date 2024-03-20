const router = require("express").Router();
const controller = require("./users.controller")
const methodNotAllowed = require("../errors/methodNotAllowed");


router.route("/")
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:userId")
    .get(controller.read)
    .all(methodNotAllowed);

router.route("/:userId/highscore")
    .put(controller.update)
    .all(methodNotAllowed);

module.exports = router;
