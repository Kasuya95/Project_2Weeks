const Sneaker = require("../models/sneaker.model");
const sneakerController = {};

// Create and save a new sneaker
sneakerController.create = async (req, res) => {
  try {
    const { name, brand, imageUrl } = req.body;

    // Validate input
    if (!name || !brand || !imageUrl) {
      return res
        .status(400)
        .send({ message: "Name, Brand or ImageUrl cannot be empty!" });
    }

    const existingSneaker = await Sneaker.findOne({ where: { name } });
    if (existingSneaker) {
      return res.status(400).send({ message: "Sneaker already exists!" });
    }

    const newSneaker = await Sneaker.create({ name, brand, imageUrl });
    res.status(201).send(newSneaker);
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while creating the sneaker.",
    });
  }
};

// Retrieve all sneakers
sneakerController.getAll = async (req, res) => {
  try {
    const sneakers = await Sneaker.findAll();
    res.send(sneakers);
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving sneakers.",
    });
  }
};

// Retrieve a single sneaker by ID
sneakerController.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sneaker = await Sneaker.findByPk(id);

    if (!sneaker) {
      return res
        .status(404)
        .send({ message: `Sneaker not found with ID ${id}` });
    }

    res.send(sneaker);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "An error occurred while retrieving the sneaker.",
    });
  }
};

// Update a sneaker by ID
sneakerController.update = async (req, res) => {
  try {
    const { name, brand, imageUrl } = req.body;
    const { id } = req.params;

    if (!name && !brand && !imageUrl) {
      return res
        .status(400)
        .send({ message: "Name, Brand, or ImageUrl must be provided." });
    }

    const [updated] = await Sneaker.update(
      { name, brand, imageUrl },
      { where: { id } }
    );

    if (updated === 1) {
      res.send({ message: "Sneaker updated successfully." });
    } else {
      res.status(404).send({
        message: `Cannot update sneaker with ID ${id}. It may not exist.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while updating the sneaker.",
    });
  }
};

// Delete a sneaker by ID
sneakerController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Sneaker.destroy({ where: { id } });

    if (deleted === 1) {
      res.send({ message: "Sneaker deleted successfully." });
    } else {
      res.status(404).send({
        message: `Cannot delete sneaker with ID ${id}. It may not exist.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while deleting the sneaker.",
    });
  }
};

module.exports = sneakerController;
