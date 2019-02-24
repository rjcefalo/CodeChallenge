const express = require("express");
const router = express.Router();

const products = [
  {
    image: "",
    title: "iphone",
    description: "apple",
    color: "black",
    price: 200
  },
  {
    image: "",
    title: "galaxy",
    description: "samsung",
    color: "silver",
    price: 100
  }
];

/* GET home page. */
router.get("/products", (req, res, next) => {
  res.status(200).json(products);
});

module.exports = router;
