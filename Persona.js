
const { Router } = require('express');
const router = Router();
const { getPersonas, registrarPersona, getPersona, actualizarPersona,  deletePersona } = require('../Controladores/PersonaControlador');
 

router.route('/')
    .get(getPersonas)
    .post(registrarPersona)

 router.route('/:id')   
   .get(getPersona)
    .put(actualizarPersona)
    .delete(deletePersona)

    
module.exports = router;