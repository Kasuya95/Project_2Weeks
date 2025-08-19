const express = require("express");
const sneakerController = require("../controllers/sneaker.controller.js");

const router = express.Router();

router.post("/", sneakerController.create);
// localhost:3000/api/v1/
router.get("/", sneakerController.getAll);
// localhost:3000/api/v1/
router.get("/:id", sneakerController.getById);
// localhost:3000/api/v1/1
router.put("/:id", sneakerController.update);
// localhost:3000/api/v1/1
router.delete("/:id", sneakerController.deleteById);
// localhost:3000/api/v1/1

module.exports = router;
