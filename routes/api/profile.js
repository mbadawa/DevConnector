const express = require('express');
const router = express.Router();



// @route   GET api/users/profile
// @desc    Tests users route
// @access  Public

router.get('/', (req, res) => res.send("User profile route"))


module.exports = router;
