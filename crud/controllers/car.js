const car = require("../models/car");

const getCar = async (req, res) => {
  try {
    const cardata = await car.find();
    res.send(cardata);
  } catch (error) {
    res.status(500).send("MSG : Internal Error");
  }
};

const postCar = async (req, res) => {
    const carData = req.body;
    try {
        const result = await car.create(carData);
        res.send(result);
    } catch (error) {
        res.status(500).send("MSG : Internal Error");
    }
};

const putCar = async (req, res) => {
    const carID = req.params;
    const cardata = req.body;
    try {
        const updateddata = await car.findByIdAndUpdate(carID,cardata,{new : true, runValidators : true})
        res.send(updateddata);
    } catch (error) {
        res.status(500).send("MSG : Internal Error");
    }
};

const deleteCar = async (req, res) => {
    const carID = req.params;
    const deletedCar = await car.findByIdAndDelete(carID);
    res.send(deletedCar);
};

module.exports = {getCar,postCar,putCar,deleteCar};