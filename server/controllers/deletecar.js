const { OEM, otherDetails } = require("../Models/AddCar");

const deleteCar = async(req,res) => {

    const body = req.query;
    
    let product = await OEM.findByIdAndDelete(body.id);
    let product_2 = await otherDetails.findOneAndDelete({oemRef: body.id})

    res.send({
        message:"Product deleted"
    })
}

module.exports = {deleteCar}