const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));  //To use local assets
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/infopost.html");
});

app.listen(3000, function(){
    console.log("Server started....");
});

app.post("/",function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;

    console.log(firstName,lastName,username,email,phone);
});