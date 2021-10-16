const mongoose = require("mongoose");
const express = require("express");
const shop = require("./ModelSchema");

const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("image");

router.get("/foods", async (req, res) => {
  try {
    const getAll = await shop.find();
    res.status(200).json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/food/:id", async (req, res) => {
  try {
    const getAll = await shop.findById(req.params.id);
    res.status(200).json(getAll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/food", imageUpload, async (req, res) => {
  try {
    const postProd = await shop.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });
    res.status(200).json({ postProd });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/food/:id", imageUpload, async (req, res) => {
  try {
    const del = await films.findByIdAndDelete(req.body.id);
    res.status(200).json(del);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
