// Importing express
const express = require('express')
// Calling express router
const router = express.Router()

/**
 * @method GET This method will get the index url of the application
 */
router.get('/', (req, res) => {
    // Rendering the index page
    res.render('index', {
        // Passing page title attribute
        title: 'Welcome'
    })
})

// Exporting router
module.exports = router