const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // harkirat@gmail.com
    const password = req.headers.password; /// 123456

    //In middleware why does the header have the username and password, this is coz every next time we are sending the username and password in the headers while in case of creation of an admin we are sending it in the body

    Admin.findOne({                //This function would return us the data of the admin if found and then we are doing next() for further things
        username: username,
        password: password
    })
    .then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
        }
    })
}

module.exports = adminMiddleware;