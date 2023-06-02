const {Router} = require("express")

const dogDbHandler = require("../handlers/getDogDb")
const createNewDogHandler = require("../handlers/createNewDogHandler")

const dogsRouterDb = Router()

dogsRouterDb.get("/", dogDbHandler);
dogsRouterDb.post("/", createNewDogHandler);


module.exports = dogsRouterDb