const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();

app.use(express.static("public"));  //To use local assets
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/infopost.html");
});

app.listen(3000, function(){
    console.log("Server started....");
});

// MySQL setup
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'formmysqlwithnodejs'
});

connection.connect(function(err){
    if(err) throw err;

    console.log('Database is connect successfully...');
});

connection.end();


app.post("/",function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;

    console.log(firstName,lastName,username,email,phone,gender);
});