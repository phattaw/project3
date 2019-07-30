const router = require("express").Router();
const rollsController = require("../../controllers/rollsController");

// Matches with "/api/tiles"
router.route("/api/roll")
  .post(rollsController.create);

// Matches with "/api/tiles/:id"
router
  .route("/api/roll/:id")
  .get(rollsController.findById)
  .put(rollsController.update)
  .delete(rollsController.remove);

  router.route("/api/rolls")
  .get(rollsController.findAll)
  .post(rollsController.createMany);

  

module.exports = router;
