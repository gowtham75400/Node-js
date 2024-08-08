var express = require("express");
var app = express();

    const middlewareFunction = (req, res, next) => {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const isAuthenticated = random(0, 2);
    if (isAuthenticated) {
        console.log("Middleware Function");
        next();
    } else res.send("User is not Authenticated");
    };
    // app.use(middleWareFunction);
    app.get("/", middlewareFunction, (req, res) => {
    console.log("Inside the / route");
    res.send("Hello Middleware");
    });

    app.get("/no-middleware", function (req, res) {
    console.log("Inside the /no-middleware route");
    res.send("Hello no-middleware endpoint");
    });

app.listen(3000);