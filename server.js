const express = require("express");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("my api is working now");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
