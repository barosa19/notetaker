const router = require('express').Router()
const path = require('path');
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
 })

module.exports = router