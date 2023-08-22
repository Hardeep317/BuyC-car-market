const { OEM, otherDetails } = require("../Models/AddCar");
const User = require("../Models/User");

const userExists = async(email) => {
    const user = await User.findOne({email: email});
    return user;
}

const addCar = async(req, res) => {
    const body = req.body;

    const user = await userExists(req.body.email);

    if(user.role === 'dealer'){
        const Oem = await OEM.insertMany([body.oemdetails]);
    
        let otherDetailsPayload = {...body.otherdetails, oemRef : Oem[0]._id};
        const allDeatils = await otherDetails.insertMany([otherDetailsPayload]);


        res.status(201).send({
            status: 'succes',
            message:'Item added successfully',
            error:null
        })
    }else{
        res.status(401).send({
            response:'failed',
            error:'Unauthorized Action',
            data:null,
            message:'',
            request:'ok'
        })
        return;
    }

    
}

module.exports = {addCar}