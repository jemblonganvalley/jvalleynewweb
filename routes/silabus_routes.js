const express = require('express')
const silabus = express.Router()

silabus.get('/', (req,res)=>{
    res.render('silabus')
})

module.exports = silabus