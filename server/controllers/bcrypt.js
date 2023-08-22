const bcrypt = require('bcrypt');


const encode = (plainText) => {
    const enpass = bcrypt.hashSync(plainText, 10);
    return enpass;
}


const decode = (plainText, encryptedText) => {
    const data = bcrypt.compareSync(plainText, encryptedText);
    return data;
}

module.exports = {encode, decode}