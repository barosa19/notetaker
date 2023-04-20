const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const data = fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
