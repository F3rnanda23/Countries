const { Router } = require("express");
const countryRouter = require("./countryRouter");
const tourismRouter = require("./tourismRouter");
const dbRouter = require('./dbRouter')

const router = Router();

router.use('/', dbRouter);
router.use('/countries', countryRouter);
router.use('/activities', tourismRouter);

module.exports = router;
