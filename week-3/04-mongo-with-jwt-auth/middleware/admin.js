// Middleware for handling auth
const {Admin} = require('../db');
const {JWTPASSWORD} = require('../routes/admin');  //Production me .config file me yab store karke usko .gitignore me daalte he to usme daalna tha naaki route me directly

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    //token = Bearer asdlfjdvoubvsdlnvww
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const resp = jwt.verify(jwtToken, JWTPASSWORD);
        if(resp.usermame){  //Ye if else hi nahi diya tha maine directly next() kardiya...Verify hua ya nahi wo check hi nahi kiya
            next();
        } else{
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
        
    } catch (error) {
        res.status(404).send("Incorrect inputs given"); //ye try catch tumhe pata he verify fn ki wajah se he pata chala token ke jagah kuch aur bhej diya usne to error 
    }                                       //throw kar dega 
}

module.exports = adminMiddleware;