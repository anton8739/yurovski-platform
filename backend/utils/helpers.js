const jwt = require('jsonwebtoken')
const getUserFromAuth = (req) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return undefined;
    }
    return  jwt.verify(token, process.env.SECRET_KEY)
}
module.exports = {
    getUserFromAuth
}