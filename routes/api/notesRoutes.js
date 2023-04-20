const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data Received");
    return res.json(JSON.parse(data))
  });
});

router.post("/", (req, res) => {
  const data = fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file read");
    const parsedData = JSON.parse(data);
    parsedData.push(req.body);
    const newData = JSON.stringify(parsedData);
    fs.writeFile("./db/db.json", newData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("New data added");
      return res.json(newData)
    });
  });
});

module.exports = router;
