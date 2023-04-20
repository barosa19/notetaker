const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.get('/notes', (req,res) => {
    res.send("/notes route works")
})

router.get('*', (req,res) => {
    res.send(" * route works")
 })

module.exports = router