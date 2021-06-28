const router = require('express').Router();
const Review = require('../db/models/reviews');

//const { requireToken } = require('./gatekeepingMiddleware');
module.exports = router;

//api/reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      attributes: [
        'id',
        'teaName',
        'format',
        'flavors',
        'obtainedFrom',
        'cost',
        'perQty',
        'brewingStyle',
        'rebrewing',
        'review',
      ],
    });
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

//api/reviews/:reviewId
router.get('/:reviewId', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.reviewId, {
      attributes: [
        'id',
        'teaName',
        'format',
        'flavors',
        'obtainedFrom',
        'cost',
        'perQty',
        'brewingStyle',
        'rebrewing',
        'review',
      ],
    });
    res.json(review);
  } catch (error) {
    next(error);
  }
});

//api/reviews/sections/:sectionId
router.get('/sections/:sectionId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        sectionId: req.params.sectionId,
      },
      attributes: [
        'id',
        'teaName',
        'format',
        'flavors',
        'obtainedFrom',
        'cost',
        'perQty',
        'brewingStyle',
        'rebrewing',
        'review',
      ],
    });
    //console.log('SECTIONS in API>>>', sections);
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});
