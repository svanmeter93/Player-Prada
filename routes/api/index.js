const router = require('express').Router();
const teamRoutes = require('./team-routes')
const scoreRoutes = require ('./scores-routes')
const userRoutes = require ('./user-routes')

router.use('/teams', teamRoutes);
router.use('/scores',scoreRoutes);
router.use('/users',userRoutes);

module.exports = router;
