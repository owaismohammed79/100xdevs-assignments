const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


let numberOfRequestsForUser = {};  


setInterval(() => { //This is what I felt is the amazing part as it clears all the data of the user per second and now all I 
                    //have to do is to check if the user has made more than 5 requests in a second or not.
numberOfRequestsForUser = {};
}, 1000)            //LEARNING FROM HERE WAS THAT FIRSTLY THIS REFRESH SHOULD BE PRESENT ABOVE OTHERWISE WILl NOT WORK  FOR MORE THAN 5 REQUESTS


function rateLimiterMiddleware(req, res, next){
  let userid = req.headers["user-id"];
  if(numberOfRequestsForUser[userid]){
    numberOfRequestsForUser[userid] = numberOfRequestsForUser[userid] + 1;
    if(numberOfRequestsForUser[userid] >= 6){
      res.status(404).json({
        msg : "No entry"
      });
    }
    else{
      next();
    }
  }
  else{
    numberOfRequestsForUser[userid] = 1;
    next();
  }
}


app.use(rateLimiterMiddleware);


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});


app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


module.exports = app;