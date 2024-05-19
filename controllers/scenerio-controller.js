const { readData, writeData } = require("../models/data.model");

const getScenarios = (req, res) => {
  const data = readData();
  res.json(data.scenarios);
};

const getScenarioById = (req, res) => {
  const data = readData();
  const scenario = data.scenarios.find((s) => s.id === req.params.id);
  if (scenario) {
    res.json(scenario);
  } else {
    res.status(404).send("Scenario not found");
  }
};

const createScenario = (req, res) => {
  const data = readData();
  const newScenario = {
    id: `sc_${Date.now()}`,
    ...req.body,
    vehicles: [],
  };

  data.scenarios.push(newScenario);
  writeData(data);
  res.status(201).json(newScenario);
};

const updateScenario = (req, res) => {
  const data = readData();
  const index = data.scenarios.findIndex((s) => s.id === req.params.id);
  if (index !== -1) {
    data.scenarios[index] = { ...data.scenarios[index], ...req.body };
    writeData(data);
    res.json(data.scenarios[index]);
  } else {
    res.status(404).send("Scenario not found");
  }
};

const deleteScenario = (req, res) => {
  const data = readData();
  const index = data.scenarios.findIndex((s) => s.id === req.params.id);
  if (index !== -1) {
    data.scenarios.splice(index, 1);
    writeData(data);
    res.status(204).send();
  } else {
    res.status(404).send("Scenario not found");
  }
};

module.exports = {
  getScenarios,
  getScenarioById,
  createScenario,
  updateScenario,
  deleteScenario,
};
