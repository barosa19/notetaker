const router = require("express").Router();
const fs = require("fs");
const {v4: uuidv4} = require("uuid")

//? async
//? write and read different functions

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

    const {title, text} = req.body
    const newData = {
      id: uuidv4(),
      title: title,
      text:text
    }

    const parsedData = JSON.parse(data);
    parsedData.push(newData);
    const updatedData = JSON.stringify(parsedData);

    fs.writeFile("./db/db.json", updatedData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("New data added");
      return res.json(newData)
    });
  });
});

router.delete("/:id", (req, res) => {

})
module.exports = router;
