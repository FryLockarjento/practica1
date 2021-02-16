const express = require('express')
let path = require('path')
    //Mando a llamar al archivo para que los modulos sirvan
const rutas = require('./routers/siteRoute')
const { config } = require('./config/config')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Para decir que las plantillas seran de pug
app.set('view engine', 'pug');
//Para decir donde se encuentran los archivos pug
app.set('views', path.join(__dirname + '/views'))
    //Para que encuentre los archivos estaticos
app.use('/static', express.static(__dirname + '/public'))
    //Ocupa las rutas ya establecidas
app.use('/', rutas)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})