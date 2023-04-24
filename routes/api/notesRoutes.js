const router = require("express").Router();
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

class Note{
  constructor(title,text){
    this.title = title,
    this.text = text
    this.id = uuidv4()
  }
}
var readData = async () => {
  try {
    var data = await fs.readFile("./db/db.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

router.get("/", async (req, res) => {
  var currentNotes = await readData();
  return res.json(currentNotes);
});

router.post("/", async (req, res) => {
  try {
    var currentNotes = await readData();
    const { title, text } = req.body;
   var newData = new Note(title,text)
    currentNotes.push(newData);
    await fs.writeFile("./db/db.json", JSON.stringify(currentNotes));
    res.json(newData);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const currentNotes = await readData()
    const noteId = req.params.id;
      const filteredData = currentNotes.filter((note) => note.id !== noteId);
      await fs.writeFile("./db/db.json", JSON.stringify(filteredData))
      res.json(filteredData)
    
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }

});
module.exports = router;
