const z = require('zod');
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


const schema = z.object({
  username: z.string().email(),
  password: z.string().min(6)
})
/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
  const response = schema.safeParse({username, password})
  if(response.success){
    const token = jwt.sign({username, password}, jwtPassword); //Main thing that I learnt here is that we can sign using an object too that means
    return token;                                              //we can do it with arrays or any datatypr for that matter
  }
  else{
    return null;
  }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
      const response = jwt.verify(token, jwtPassword);
      return true;
    } catch(e){
      return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {true|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const response = jwt.decode(token);
    if(response == null){
      return false;
    }
    else{
      return true;
    }
}



module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
