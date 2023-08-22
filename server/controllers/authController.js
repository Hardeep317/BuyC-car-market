const User = require("../Models/User");
const { encode, decode } = require("./bcrypt");
const { generateToken } = require("./jwt");


const userExists = async(email) => {
    const user = await User.findOne({email: email});
    return user;
}


const register = async(req, res) => {

    const user = await userExists(req.body.email);

    if(user){
        res.status(403).send({
            response:'failed',
            error:'User already exists',
            data:null,
            message:'',
            request:'ok'
        })
        return;
    }else{
        const ecpass = encode(req.body.password);
        req.body.password = ecpass;

        const response = await User.insertMany([req.body]);
        response[0].password = ""

        res.status(201).send({
            response:'success',
            error:'',
            data:response,
            message:'User Addedd Successfully',
            request:'ok'
        })
    }
}



const login = async(req, res) => {
    const body = req.body;
    const user = await userExists(body.email)

    if(!user){
        res.status(404).send({
            response:'failed',
            error:'User not found',
            data: null,
            message:'',
            request:'ok',
            token:null
        })
        return;
    }else{

        const isPass =  decode(body.password, user.password);

        if(isPass){
            const payload = {
                name:user.name,
                email:user.email,
                _id:user._id,
                role:user.role
            }

            const token = generateToken(payload);
            res.status(200).send({
                response:'success',
                error:'',
                data: payload,
                message:'Successfully logged in',
                request:'ok',
                token:token
        })
    }else{
        res.status(400).send({
            response:'failed',
            error:'Invalid password',
            data: null,
            message:'',
            request:'ok',
            token:null
    })
    }
}
}

module.exports = {register, login}