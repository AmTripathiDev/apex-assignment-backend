var express = require("express");

const {
  getScenarios,
  getScenarioById,
  createScenario,
  updateScenario,
  deleteScenario,
} = require("../controllers/scenerio-controller");

const router = express.Router();
router.get("/all", getScenarios);
router.get("/single/:id", getScenarioById);
router.post("/create", createScenario);
router.patch("/update/:id", updateScenario);
router.delete("/delete/:id", deleteScenario);

module.exports = router;
