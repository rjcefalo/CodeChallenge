const express = require("express");
const router = express.Router();

const products = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/IPhone_5s_Black.png",
    title: "iPhone",
    description: "Apple",
    color: "Black",
    price: 200
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Samsung_Galaxy_S7.png",
    title: "Galaxy",
    description: "Samsung",
    color: "Silver",
    price: 100
  }
];

router.get("/products", (req, res, next) => {
  res.status(200).json(products);
});

module.exports = router;
