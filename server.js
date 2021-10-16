const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 4000;
const DB_ONLINE =
  "mongodb+srv://giddy:BqGOcPI8FD0DL2K7@cluster0.7rupp.mongodb.net/FoodDB?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose
  .connect(DB_ONLINE, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("an error occured while connecting to the server");
  });

app.use(cors());

app.use("/api", require("./router"));

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
