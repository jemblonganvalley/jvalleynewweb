const express = require("express")
const cors = require('cors')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const index = require('./routes/index_route')
const about = require("./routes/about_routes")
const silabus = require("./routes/silabus_routes")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
app.engine('html', handlebars({
    layoutsDir : `${__dirname}/views/layouts`,
    defaultLayout : 'main_layout',
    partialsDir : `${__dirname}/views/components`,
    extname : 'html'
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use('/',index)
app.use('/about', about)
app.use('/silabus', silabus)

// app.get('/', (req, res)=>{
//     res.render('index', {
//         title : 'hello',
//         brand : 'jvalley'
//     })
// })

app.listen(3000, ()=>{console.log('listen port 3000')})