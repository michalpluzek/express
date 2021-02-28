const express = require("express");
const router = express.Router();
const News = require("../models/news");

/* GET home page. */
router.get("/", (req, res) => {
  // console.log(req.query);
  const search = req.query.search || "";

  const findData = News.find({ title: new RegExp(search.trim(), "i") }) // metody od mongoose
    .sort({ created: -1 });

  findData.exec((err, data) => {
    res.render("news", { title: "News", data, search });
  });
});

module.exports = router;
