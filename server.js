// require express first
var express = require("express");
//require socket.IO
var socket = require('socket.io')

//setting up the express app by invoking the express function
var app = express();

//now create a server
//When the server starts listening on port 4000 then fire a callbak function
// The callback function will console.log a string 
var server = app.listen(4000, function(){
 console.log("Listening to requests on port 4000");

});
// serve a static file to the browser 
app.use(express.static("public"));

//Socket setup
//passing var server to the socket function and assigning it to var io
//essentially now socket.IO will work on this server just created
var io = socket(server);