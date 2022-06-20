const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    return res.render('index.ejs'); 
})

module.exports = router