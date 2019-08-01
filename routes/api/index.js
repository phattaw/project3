const router = require("express").Router();
const rollsRoutes = require("./tiles");

// Book routes
router.use("/tiles", rollsRoutes);

module.exports = router;
