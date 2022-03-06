const express = require("express");
const htmlroutes = require("./Routes/htmlroutes");
const apiroutes = require("./Routes/apiroutes");
const res = require("express/lib/response");
const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlroutes);
app.use("/notes", apiroutes);

app.post("", (req, response) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = request.body;
  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
