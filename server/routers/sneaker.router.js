const express = require("express");
const sneakerController = require("../controllers/sneaker.controller.js");

const router = express.Router();

router.post("/", sneakerController.create);
router.get("/", sneakerController.getAll);
router.get("/:id", sneakerController.getById);
router.put("/:id", sneakerController.update);
router.delete("/:id", sneakerController.deleteById);

module.exports = router;
