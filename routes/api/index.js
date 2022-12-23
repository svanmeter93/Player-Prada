const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const teamRoutes = require('./team-routes')
const scoreRoutes = require ('./scores-routes')

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/teams', teamRoutes);
router.use('/scores',scoreRoutes)

module.exports = router;
