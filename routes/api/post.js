const express = require('express');
const router = express.Router();



// @route   GET api/users/post
// @desc    Tests users route
// @access  Public

router.get('/', (req, res) => res.send("User post route"))


module.exports = router;
