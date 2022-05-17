const { Router } = require('express');
const router = Router();


const { getObservaciones, registrarObservacion, getObservacion, actualizarObservacion,  deleteObservacion } = require('../Controladores/Observaciones_EstimacioneControlador');
 

router.route('/')
    .get(getObservaciones)
    .post(registrarObservacion)

 router.route('/:id')   
   .get(getObservacion)
    .put(actualizarObservacion)
    .delete(deleteObservacion)

    
module.exports = router;