const express = require("express");
const app = express();

app.get('/', function(req,res){
    res.send("Hi blob!")
});
app.get('/front', function(req,res){
    res.send("Hi blob! come straight in through front.")
});
app.get('/back', function(req,res){
    res.send("Hi blob! Don't wander in the back.")
});


// Addition route
app.get('/add', function(req, res) {
    const dnum1 = 100;
    const dnum2 = 25;
    const dresult = dnum1 + dnum2;

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${result}\n 
        The sum of ${dnum1} and ${dnum2} is ${dresult}`);

});

// Subtraction route
app.get('/subtract', function(req, res) {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is ${result}`);
});

// Multiplication route
app.get('/multiply', function(req, res) {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${result}`);
});

// Division route
app.get('/divide', function(req, res) {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
        res.send("Cannot divide by zero!");
    } else {
        const result = num1 / num2;
        res.send(`The quotient of ${num1} divided by ${num2} is ${result}`);
    }
});

app.listen(3000);
