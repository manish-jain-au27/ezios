const express =  require("express");
const { getCar, postCar, putCar, deleteCar } = require("../controllers/car");
const authMiddleware = require("../middlewares/auth");


const carRouter = express.Router();

carRouter.use(authMiddleware);

carRouter.get("/cars",getCar);
carRouter.post("/addCar",postCar);
carRouter.put("/editCar/:carID",putCar);
carRouter.delete("/removeCar/:carID",deleteCar);

module.exports = carRouter;