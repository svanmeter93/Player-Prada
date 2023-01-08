const router = require('express').Router();
const teamRoutes = require('./team-routes')
const scoreRoutes = require ('./scores-routes')

router.use('/teams', teamRoutes);
router.use('/scores',scoreRoutes)

module.exports = router;
