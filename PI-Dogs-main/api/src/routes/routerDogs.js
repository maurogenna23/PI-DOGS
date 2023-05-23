const {Router} = require("express")

const dogHandler = require ("../handlers/dogHandler")
const getDogByIdHandler = require("../handlers/getDogByIdHandler")

//const dogDbHandler = require("../handlers/getDogDb")

const dogsRouter = Router();

dogsRouter.get("/", dogHandler);
dogsRouter.get("/:id", getDogByIdHandler); 
//dogsRouter.get("/db", dogDbHandler)


module.exports = dogsRouter;