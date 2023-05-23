const {Router} = require ("express");

const getTemperamentHandler = require ("../handlers/getTemperamentHandler")

const tempRouter = Router();

tempRouter.get("/", getTemperamentHandler);

module.exports = tempRouter;