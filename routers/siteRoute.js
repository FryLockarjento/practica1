const express = require('express')
const admin = require('firebase-admin')
const router = express.Router() 

const firebase = require('firebase')
//const { app } = require('firebase-admin')

router.get('/', (req, res) => {
    res.render('index')
})


//Modulo para exportar las rutas
module.exports = router