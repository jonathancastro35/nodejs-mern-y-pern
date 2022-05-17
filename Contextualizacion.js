
const { Router } = require('express');
const router = Router();
const { getContextualizaciones, registrarContextualizacion, getContextualizacion, actualizarContextualizacion,  deleteContextualizacion } = require('../Controladores/ContextualizacionControlador');
 

router.route('/')
    .get(getContextualizaciones)
    .post(registrarContextualizacion)

 router.route('/:id')   
   .get(getContextualizacion)
    .put(actualizarContextualizacion)
    .delete(deleteContextualizacion)

    
module.exports = router;