const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)
app.use("/new", newMessageRouter)


PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running, listening on " + PORT);
});
