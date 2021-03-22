const express = require('express')
const about = express.Router()

about.get('/', (req,res)=>{
    res.render('about')
})

about.get('/:username' , (req,res)=>{
    let {username} = req.params
    res.render('about', {
        username : username
    })
})

module.exports = about
