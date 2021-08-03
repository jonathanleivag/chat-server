import jwt from 'jsonwebtoken'

export function sign (data) {
  return jwt.sign(data, process.env.KEY_JWT)
}

export function verify (token) {
  return jwt.verify(token, process.env.KEY_JWT)
}
