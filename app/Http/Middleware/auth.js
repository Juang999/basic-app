const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authenticator = req.headers['authorization']
    const token = authenticator && authenticator.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403) 
        req.user = user
        next()
    })
}

module.exports = authMiddleware