const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('prueba')
})


//Modulo para exportar las rutas
module.exports = router