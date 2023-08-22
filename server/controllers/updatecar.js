const {OEM, otherDetails} = require('../Models/AddCar')


const updateProduct = async(req,res) => {
    const oemProduct = await OEM.findByIdAndUpdate(req.body.oemdetails._id, req.body.oemdetails );
    const otherProduct = await otherDetails.findOneAndUpdate({oemRef: req.body.otherdetails.oemRef}, req.body.otherdetails);

    res.status(200).send({status:"Success"})
}

module.exports = {updateProduct}