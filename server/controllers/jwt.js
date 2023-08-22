const jwt = require('jsonwebtoken');
const secretkey = 'harrybhaig......'


const generateToken = (payload) => {
    const token = jwt.sign(payload, secretkey)
    return token;
}


const verfityToken = (token) => {
    const data = jwt.verify(token, secretkey);
    return data;
}


module.exports = {generateToken, verfityToken}