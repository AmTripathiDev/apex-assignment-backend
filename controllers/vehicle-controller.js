const { readData, writeData } = require("../models/data.model");

const createVehicle = (req, res) => {
  const data = readData();
  console.log("coming here ", req.body)
  const scenario = data.scenarios.find((s) => s.id === req.body.scenerioId);
  if (scenario) {
    const newVehicle = {
      id: `veh_${Date.now()}`,
      ...req.body,
    };
    scenario.vehicles.push(newVehicle);
    writeData(data);
    res.status(201).json(newVehicle);
  } else {
    res.status(404).send("Scenario not found");
  }
};

const updateVehicle = (req, res) => {
  const data = readData();
  let vehicleUpdated = false;
  const scenario = data.scenarios.find((s) => s.id === req.body.scenerioId);
  if (scenario != -1) {
    const newVehicle = {
      id: `veh_${Date.now()}`,
      ...req.body,
    };
    scenario.vehicles.push(newVehicle);
    vehicleUpdated = true;
  }
  if (vehicleUpdated) {
    writeData(data);
    res.json(req.body);
  } else {
    res.status(404).send("Vehicle not found");
  }
};

const updatingVehicle = (req, res) => {
  const data = readData();
  let vehiceupdated = false;
  data.scenarios.forEach((scenario) => {
    const index = scenario.vehicles.findIndex((v) => v.id === req.params.id);
    if (index !== -1) {
        console.log(index , " coming ")
      scenario.vehicles.splice(index, 1);
      scenario.vehicles.push(req.body);
      vehiceupdated = true;
    }
  });

  if (vehiceupdated) {
    writeData(data);
    res.json(req.body);
  } else {
    res.status(404).send("Vehicle not found");
  }
};

const deleteVehicle = (req, res) => {
  const data = readData();
  let vehicleDeleted = false;
  data.scenarios.forEach((scenario) => {
    const index = scenario.vehicles.findIndex((v) => v.id === req.params.id);
    if (index !== -1) {
      scenario.vehicles.splice(index, 1);
      vehicleDeleted = true;
    }
  });
  if (vehicleDeleted) {
    writeData(data);
    res.status(204).send();
  } else {
    res.status(404).send("Vehicle not found");
  }
};

module.exports = {
  createVehicle,
  updateVehicle,
  deleteVehicle,
  updatingVehicle,
};
