const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/tiles"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/tiles/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
