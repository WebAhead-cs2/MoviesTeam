
const express = require("express");
const app = express();
const templates = require("./templates");
app.use(express.static("MainPage"));

app.listen(3000, function () {
    console.log("Server statrted on port http://localhost:3000");

});


app.get("/Home", function (req, res) {
    const html = templates.layout();
    res.send(html);
});

app.get("/SignUp", function (
    req, res) {
    res.send("<h1>signUp</h1>");
});
app.get("/Login", function (req, res) {
    res.send("<h1>Login</h1>");
});