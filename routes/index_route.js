const express = require('express')
const index = express.Router()

index.get('/', (req,res)=>{
    res.render('index', {
        title : "Jvalley Home",
        meta_desc : "Kursus Pemograman Komputer Gratis",
        meta_title : "Jvalley Kursus IT Gratis",
        meta_image : "https://picsum.photos/seed/fadliselaz/200"
    })
})

module.exports = index