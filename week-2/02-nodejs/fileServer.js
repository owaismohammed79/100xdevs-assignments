/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) =>{
  fs.readdir('./files', 'utf-8', (err, data) =>{
    if(err){
      res.status(404).json({
        msg: "Error in reading the folder"
      })
    }
    else{
      res.status(200).send(data);
    }
  });
})

app.get('/files/:filename', (req, res)=>{ //Realize that the colon : in your route is to define that any string could come after that but when you're in your browser you don't have to put it
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'files', filename);
  fs.readFile(filepath, 'utf8', (err, data)=>{ //There was this whole fucking problem that if I try simply to directly append the name using + operator then it didn't work at all
    if(err){
      res.status(404).json({
        msg: "Error in reading the file"
      })
    }
    else{
      res.status(200).send(data);
    }
  });
})

app.use((req, res) => { //This is a catch all middleware which will trigger if routes other than which are defined are accessed
  res.status(404).send('Sorry, the page you requested was not found!');
});

module.exports = app;