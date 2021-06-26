const router = require('express').Router();
const Section = require('../db/models/sections');
//const { requireToken } = require('./gatekeepingMiddleware');
module.exports = router;

//api/sections
router.get('/', async (req, res, next) => {
  try {
    console.log('SECTION API I RUN');
    console.log('Do we still have the function?');
    console.log(Section);
    console.log(Section.findAll);
    const sections = await Section.findAll();
    //   {
    //   attributes: ['id', 'title', 'time', 'description', 'instructions'],
    // }
    console.log('SECTIONS in API>>>', sections);
    res.json(sections);
  } catch (err) {
    next(err);
  }
});

//api/sections/:sectionId
router.get('/:sectionId', async (req, res, next) => {
  try {
    const section = await Section.findByPk(req.params.sectionId, {
      attributes: ['id', 'title', 'time', 'description', 'instructions'],
    });
    res.json(section);
  } catch (error) {
    next(error);
  }
});

// // /products/create
// router.post('/', requireToken, async (req, res, next) => {
//   try {
//     const newProduct = await Product.create(req.body);
//     res.json(newProduct);
//   } catch (error) {
//     console.log('error creating new products', error);
//     next(error);
//   }
// });

// // /products/:productId
// router.put('/:productId', requireToken, async (req, res, next) => {
//   try {
//     const updatedProduct = await Product.findByPk(req.params.productId);
//     res.json(await updatedProduct.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// // /products/:productId
// router.delete('/:productId', requireToken, async (req, res, next) => {
//   try {
//     const removedProduct = await Product.findByPk(req.params.productId);
//     await removedProduct.destroy();
//     res.json(removedProduct);
//   } catch (error) {
//     next(error);
//   }
// });
