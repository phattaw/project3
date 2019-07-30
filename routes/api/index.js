const router = require("express").Router();
const bookRoutes = require("./tiles");

// Book routes
router.use("/tiles", rollsRoutes);

module.exports = router;
