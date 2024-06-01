const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")

const JWTPASSWORD ="user";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({
        username, password
    }, JWTPASSWORD);

    User.create({
        username: username,
        password: password,
        token: token
    })
    .then(
        res.json({
            "msg": "User created successfully"
        })
    )
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username,
        password
    })
    .then(function(){
        res.json({
            "msg" : "Signed In"
        })
    })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.findOne({})
    .then(function(resp){
        res.json({
            "Courses": resp
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.token;
    User.UpdateOne(                  //Yaha ki logic bhi gadbad kar diye the bhai tum
        {token},{
            PurchasedCourses:{
                "$push": courseId                     //Ye bhi dekh lo
            }
        }
        
    )
    .then(function(){
        res.json({
            "msg": "Course purchased successfully"
        })
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.token;
    User.findOne({token})
    .then((response)=>{
        res.json({
            "Purchased Courses": response.PurchasedCourses
        })
    })
});

module.exports = router, JWTPASSWORD;