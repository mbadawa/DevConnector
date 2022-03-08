const express = require('express');
const router = express.Router();



// @route   GET api/users/auth
// @desc    Tests users route
// @access  Public

router.get('/', (req, res) => res.send("User auth route"))


module.exports = router;
