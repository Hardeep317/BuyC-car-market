const mongoose = require('mongoose');


const OemSchema = mongoose.Schema({
    modelName:{type:String, required:true},
    year:{type:Number, required:true},
    price:{type:Number, required:true},
    color:{type:String, required:true},
    mileage:{type:Number, required:true},
    power:{type:String, required:true},
    topSpeed:{type:Number, required:true},
    image:{type:String, required:true}
})


const OEM = mongoose.model('OEM', OemSchema)

const otherSchema = mongoose.Schema({
    distance:{type:Number, required:true},
    scratch:{type:Number, required:true},
    OriginalPaint:{type:String, required:true},
    totalAccidents:{type:Number, required:true},
    buyers:{type:Number, required:true},
    registrationPlace:{type:String, required:true},
    oemRef:{type:String, required:true}
})

const otherDetails = mongoose.model('OtherDetails', otherSchema);

module.exports = {OEM, otherDetails}