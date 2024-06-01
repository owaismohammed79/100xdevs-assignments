const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

const JWTPASSWORD = "user";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
    .then(
        res.json({
            "msg": "User created successfully"
        })
    )
});

router.post('/signin', (req, res) => {
    // Implement user signin logic
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username,
        password
    })
    .then(function(){
        const token = jwt.sign({
            username, password
        }, JWTPASSWORD);
        res.json({
            "token" : token
        })
    })
    .catch((e)=>{
        res.status(404).json({
            "msg": "No user found with the given username and password"
        })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.findOne({})  //find use kiya tha hkirat ne maine findone kiya h 
    .then(function(response){
        res.json({
            Courses: response
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    Course.findOne({
        _id: id
    })
    .then((response)=>{
        res.json({
            Course: response
        })
    })
    .catch((e)=>{
        res.status(403).json({
            "msg": "Course not found"
        })
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router