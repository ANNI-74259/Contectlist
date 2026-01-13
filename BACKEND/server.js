const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contacts");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/contacts", contactRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
