const express = require("express");
const router = express.Router();

const Category = require("../models/category");


// GET - New category form
router.get("/new", (req, res) => {
  res.render("Category/new.ejs");
});

// POST - Create category

router.post("/", async (req, res) => {
 try {
req.body.user = req.session.user._id;

await Category.create(req.body);

res.redirect("/");
}catch (error) {
console.log(error);
res.redirect("/"); }
});

module.exports = router;