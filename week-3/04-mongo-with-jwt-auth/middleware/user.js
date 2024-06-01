const {User} = require('../db');
const jwt = require('jsonwebtoken');
const {JWTPASSWORD} = require('../routes/user');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const userJWT = words[1];
    const resp = jwt.verify(userJWT, JWTPASSWORD); //Isse ek aur cheez pata chala ki response me jo aaya he usme .attribute laga access kar sakte he

    if (decodedValue.username) {    
        req.username = decodedValue.username;
        req.randomData = "Adsadsadsadssd";
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }

    // try { //Ye maine kia tha
        
    //     next();
    // } catch (error) {
    //     res.status(404).json({
    //         "msg": "User not found"
    //     })
    // }
}

module.exports = userMiddleware;