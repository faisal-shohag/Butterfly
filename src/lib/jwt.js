import jwt from 'jsonwebtoken'

const DefaultSignOption = {
    expiresIn: '1d'
}

export function signJwt(payload, options = DefaultSignOption) {
    const secret = process.env.JWT_SECRET
    const token = jwt.sign(payload, secret, options)
    return token
}


export async function verifyJwt(token) {
    const secret = process.env.JWT_SECRET
    try {
        const decoded = await jwt.verify(token, secret)
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (error) {
        return {
            valid: false,
            expired: error.message === 'jwt expired'
        }
    }
}