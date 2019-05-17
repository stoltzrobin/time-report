const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
var bodyParser = require("body-parser");

const { getMonthReport } = require("./routes/monthReports");
const { addTime } = require("./routes/addTime");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/monthReport/:year/:month", getMonthReport);
app.post("/addtime", addTime);

app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res) => {
  res.status(404).json({ msg: "route not found!" });
});

app.listen(4000, () => console.log("Backend started on port 4000"));
