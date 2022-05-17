 
 
const { Router } = require('express');
const router = Router();
const { getNintexs, registrarNintex, getNintex, actualizarNintex,  deleteNintex } = require('../Controladores/NintexControlador');
 

router.route('/')
    .get(getNintexs)
    .post(registrarNintex)

 router.route('/:id')   
   .get(getNintex)
    .put(actualizarNintex)
    .delete(deleteNintex)

    
module.exports = router;





