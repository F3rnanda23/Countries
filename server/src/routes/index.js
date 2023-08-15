const { Router } = require("express");
const countryRouter = require("./countryRouter");
const tourismRouter = require("./tourismRouter");

const router = Router();

router.use('/countries', countryRouter);
router.use('/activities', tourismRouter);

module.exports = router;
