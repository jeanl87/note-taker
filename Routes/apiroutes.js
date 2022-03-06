const router = require("express").Router();

router.get("/notes", (request, response) => {
  response.send("get all notes");
  console.log("get all notes");
});

router.post("/notes", (request, response) => {
  response.send("post notes");
});

router.delete("/notes", (request, response) => {
  response.delete("delete notes");
});

module.exports = router;
