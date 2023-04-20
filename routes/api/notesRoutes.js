const router = require("express").Router();
const fs = require("fs");
const {
  writeToFile,
} = require("../../../GT-VIRT-FSF-PT-01-2023-U-LOLC/11-Express/01-Activities/28-Stu_Mini-Project/Main/helpers/fsUtils");

router.get("/", (req, res) => {
  const data = fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data Received")
    res.json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  const data = fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file read")
    const parsedData = JSON.parse(data);
    parsedData.push(req.body);
    const newData =JSON.stringify(parsedData)
    fs.writeFile("./db/db.json", newData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    console.log("New data added")
    });
  });
});

module.exports = router;
