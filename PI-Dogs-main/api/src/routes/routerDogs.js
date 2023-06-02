const {Router} = require("express")

const dogHandler = require ("../handlers/dogHandler")
const getDogByIdHandler = require("../handlers/getDogByIdHandler")

const dogsRouter = Router();

dogsRouter.get("/", dogHandler);
dogsRouter.get("/:id", getDogByIdHandler); 



module.exports = dogsRouter;