const router = require("express").Router();
const bookRoutes = require("./tiles");

// Book routes
router.use("/tiles", bookRoutes);

module.exports = router;
