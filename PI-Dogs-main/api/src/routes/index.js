const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./routerDogs");
const dogsRouterDb = require("./routerDb");
const tempRouter = require("./routerTemp");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//router.get('/dogs/name/', getDogByName) //http://localhost:3001/dogs/?name=Felipe

router.use('/dogs', dogsRouter); 
router.use('/db', dogsRouterDb); 
router.use('/temperaments', tempRouter); 

module.exports = router;
