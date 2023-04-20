const router = require('express').Router()

router.get('/', (req,res) => {
    res.send("/notes route works")
})

module.exports = router