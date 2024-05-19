const express = require("express");
const bodyParser = require("body-parser");
const scenarioRoutes = require("./routes/scenerio-routes");
const vehicleRoutes = require("./routes/vehicle-routes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use("/api/scenerio", scenarioRoutes);
app.use("/api/vehicle", vehicleRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
