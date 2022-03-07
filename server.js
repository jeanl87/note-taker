const express = require("express");
const htmlroutes = require("./Routes/htmlroutes");
const apiroutes = require("./Routes/apiroutes");
const res = require("express/lib/response");
const port = 3001;
const app = express();
const fs = require("fs");
const notes = require("./db/db.json");
const myJSON = JSON.stringify(notes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlroutes);
app.use("/notes", apiroutes);

app.get("/api/notes", (request, response) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", (request, response) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newPost = request.body;
  notes.push(newPost);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
