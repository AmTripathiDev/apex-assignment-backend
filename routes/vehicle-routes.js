var express = require('express');
const {
    createVehicle,
    updateVehicle,
    deleteVehicle,
    updatingVehicle
} = require('../controllers/vehicle-controller');
const router = express.Router();

router.post('/create', createVehicle);
router.patch('/update/:id', updateVehicle);
router.patch('/update/:scenerioId/:id', updatingVehicle);
router.delete('/delete/:id', deleteVehicle);

module.exports = router;
