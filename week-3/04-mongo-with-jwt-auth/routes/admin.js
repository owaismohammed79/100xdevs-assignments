const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');
const jwt = require('jsonwebtoken');

const JWTPASSWORD = "admin";

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(
        res.json({
            "msg": "Admin created successfully"
        })
    )
});

router.post('/signin', (req, res) => { //Yaha pe maine baigan-giri kardi coz jwt leke verify kar sakta tha aur maine concept bhi galt samjha tha ki 
    // Implement admin signup logic     //Signup ke time jwt create hota he but wo signin ke time pe hota he aur return kara jata h 
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    Course.create({    //After creation of the course it will create course id and send you the whole data. Yaha create aana tha but maine update
        title,          //use kar dia tha
        description,
        imageLink,
        price
    })
    .then(function(newCourse){
        res.json({
            "CourseID": newCourse._id
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.findOne({})  //find use kiya tha hkirat ne maine findone kiya h 
    .then(function(response){
        res.json({
            Courses: response
        })
    })
});

module.exports = router,JWTPASSWORD;