const express = require("express");
const app = express();
<<<<<<< HEAD
const port = 80;
=======
const port = 4000;
>>>>>>> 1f03379c512c2fd39d7e1ba71102f535491a4f8c

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
