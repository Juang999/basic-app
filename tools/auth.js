const jwt = require('jsonwebtoken')

const auth = async (req) => {
    const authenticator = req.headers['authorization']
    const token = authenticator && authenticator.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    const auth = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) return res.sendStatus(403)
        return user
    })

    return auth
}

module.exports = auth