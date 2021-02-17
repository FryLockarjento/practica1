const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})


//Modulo para exportar las rutas
module.exports = router