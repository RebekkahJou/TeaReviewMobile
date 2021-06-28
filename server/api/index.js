const router = require('express').Router();
module.exports = router;
const reviewsRoutes = require('./reviews');
const sectionsRoutes = require('./sections');

//router.use("/users", require("./users"));
router.use('/reviews', reviewsRoutes);
router.use('/sections', sectionsRoutes);

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
