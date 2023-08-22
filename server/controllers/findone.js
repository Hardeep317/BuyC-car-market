const { OEM, otherDetails } = require("../Models/AddCar");


const findProduct = async(req, res) => {

    const oemProduct = await OEM.findById({_id: req.body.id});
    const otherProduct = await otherDetails.findOne({oemRef: req.body.id});

    res.status(200).send({'oemDetails':oemProduct, 'otherDetails':otherProduct});
}

module.exports = {findProduct}